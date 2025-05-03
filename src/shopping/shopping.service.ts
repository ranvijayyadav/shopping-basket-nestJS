import { Injectable } from '@nestjs/common';
import { BasketResponse, PriceRules } from './interfaces/shopping.interface';

@Injectable()
export class ShoppingService {
    private readonly priceRules: PriceRules = {
        Apple: {price: 35},
        Banana: {price: 20},
        Melon: {
            price: 50,
            offer: {
                type: 'buyOneGetOneFree'
            }
        },
        Lime: {
            price: 15,
            offer: {
                type: 'threeForTwo'
            }
        }
    }
    calculateBasketToatal(items: string[]): BasketResponse {

        const itemCount = this.countItems(items);

        let total = 0;
        let originalTotal = 0;

        for(const[item, count] of Object.entries(itemCount)) {
            const rule = this.priceRules[item];
            console.log(rule, item, "Idindividaul item and rule");
            if(!rule) {
                throw new Error(`Item ${item} is not valid`);
                continue
            }

            originalTotal+=count* rule.price;

            if(rule.offer) {
                switch (rule.offer.type) {
                    case 'buyOneGetOneFree':
                        total += Math.ceil(count / 2) * rule.price;
                        break;
                    case 'threeForTwo':
                        total += (Math.floor(count/3)*2 + count% 3)* rule.price;
                        break;
                }
            } else {
                total += count * rule.price;
            }

        }

        return {
            total,
            breakdown: {
                items: itemCount,
                savings: originalTotal - total
            }
        }

    }

    private countItems(items: string[]): {[key: string]: number} {
        return items.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }
}
