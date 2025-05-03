import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { CalculateBasketDto } from './dto/calculate-basket.dto';

@Controller('shopping')
export class ShoppingController {
    constructor(private readonly shoppingService: ShoppingService) {}

    @Post('calculate')
    calculateBasket(@Body() basketDto: CalculateBasketDto){
        try {
            console.log(basketDto, "Input data");
            let result = this.shoppingService.calculateBasketToatal(basketDto.items);
            console.log("result", result);
            return  result;//this.shoppingService.calculateBasketToatal(basketDto.items);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
