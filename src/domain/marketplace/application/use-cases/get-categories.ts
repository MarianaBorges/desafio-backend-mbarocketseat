import { Injectable } from '@nestjs/common';
import { Either, right } from 'src/core/either';
import { ResourceNotFoundError } from 'src/core/erros/errors/resource-not-found-error';
import { Category } from '../../enterprise/entities/category';
import { CategoryRepository } from '../repositories/category-repository';

type CategoriesUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    categories: Category[];
  }
>;

@Injectable()
export class CategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(): Promise<CategoriesUseCaseResponse> {
    try {
      const categories = await this.categoryRepository.getAll();
      console.log(categories);
      return right({
        categories,
      });
    } catch (error) {
      console.log('error aqui', error);
    }
  }
}
