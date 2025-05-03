import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
  let service: ShoppingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingService],
    }).compile();

    service = module.get<ShoppingService>(ShoppingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should calculate the total price of the basket', () => {
    const items = ['Apple', 'Banana', 'Melon', "Lime"];
    const expectedResult = {
      total: 120,
      breakdown: {
        items: { Apple: 1, Banana: 1, Melon: 1 },
        savings: 0,
      },
    };
    expect(service.calculateBasketToatal(items).total).toEqual(expectedResult.total);
  })
  it('should calculate the total price of the basket with offers', () => {
    const items = ['Apple', 'Banana', 'Melon', "Melon", "Lime", "Lime", "Lime", "Lime"];
    const expectedResult = {
      total: 150,
      breakdown: {
        items: { Apple: 1, Banana: 1, Melon: 1, Lime: 3 },
        savings: 0,
      },
    };
    expect(service.calculateBasketToatal(items).total).toEqual(expectedResult.total);
  });
  it('should calculate the total price of the basket with no items', () => {
    const items = [];
    const expectedResult = {
      total: 0,
      breakdown: {
        items: {},
        savings: 0,
      },
    };
    expect(service.calculateBasketToatal(items).total).toEqual(expectedResult.total);
  });
});
