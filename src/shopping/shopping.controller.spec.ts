import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingController } from './shopping.controller';
import { ShoppingService } from './shopping.service';
import { BadRequestException } from '@nestjs/common';

describe('ShoppingController', () => {
  let controller: ShoppingController;
  let service: ShoppingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingController],
      providers: [ ShoppingService],
    }).compile();

    controller = module.get<ShoppingController>(ShoppingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should calculate the total price of the basket', () => {
    const items = ['Apple', 'Banana', 'Melon'];
    const expectedResult = {
      total: 105,
      breakdown: {
        items: { Apple: 1, Banana: 1, Melon: 1 },
        savings: 0,
      },
    };
    expect(controller.calculateBasket({items}).total).toEqual(expectedResult.total);
  });

  it('should throw BadRequestException for invalid input', () => {
    const invalidInput = { items: ["Apple",'invalid'] };
    expect(() => controller.calculateBasket(invalidInput)).toThrow(BadRequestException);
  });

});
