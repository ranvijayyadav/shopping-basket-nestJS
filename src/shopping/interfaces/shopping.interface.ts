export interface PriceRules {

    [key: string]: {
        price: number;
        offer?: {
            type: 'buyOneGetOneFree'|'threeForTwo';
        }
    }
}

export interface BasketResponse {
    total: number;
    breakdown: {
        items: {[key: string]: number};
        savings: number;
    }
}