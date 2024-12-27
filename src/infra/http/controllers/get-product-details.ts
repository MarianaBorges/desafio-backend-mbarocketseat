import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { GetProductByIdUseCase } from 'src/domain/marketplace/application/use-cases/get-product-by-id-use-case';

import { ProductsPresenter } from '../presenters/products-presenter';

@Controller('/products/:id')
export class GetProductController {
  constructor(private getProductByIdUseCase: GetProductByIdUseCase) {}

  @Get()
  async handle(@Param('id') id: string) {
    const result = await this.getProductByIdUseCase.execute({ id });

    if (result.isLeft()) {
      throw new BadRequestException();
    }

    const product = result.value.product;

    console.log(product.user);

    return ProductsPresenter.toHTTP(product);
  }
}
