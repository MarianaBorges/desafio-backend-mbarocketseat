import { Injectable } from '@nestjs/common';

import { Either, left, right } from 'src/core/either';
import { ResourceNotFoundError } from 'src/core/erros/errors/resource-not-found-error';

import { ProductsRepository } from '../repositories/product-repository';
import { ProductDetails } from '../../enterprise/entities/value-objects/product-details';

interface GetProductByIdUseCaseRequest {
  id: string;
}

type GetProductByIdUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    product: ProductDetails;
  }
>;

@Injectable()
export class GetProductByIdUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
  }: GetProductByIdUseCaseRequest): Promise<GetProductByIdUseCaseResponse> {
    const product = await this.productsRepository.findDetailsById(id);

    if (!product) {
      return left(new ResourceNotFoundError());
    }

    return right({
      product,
    });
  }
}
