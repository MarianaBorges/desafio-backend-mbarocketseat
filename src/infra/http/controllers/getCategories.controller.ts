import { BadRequestException, Controller, Get } from '@nestjs/common';
import { CategoriesUseCase } from 'src/domain/marketplace/application/use-cases/get-categories';
import { CategoriesPresenter } from '../presenters/categories-presenter';

@Controller('/categories')
export class GetCategoriesController {
  constructor(private categoriesUseCase: CategoriesUseCase) {}

  @Get()
  async handle() {
    const result = await this.categoriesUseCase.execute();

    if (result.isLeft()) {
      throw new BadRequestException();
    }

    const categories = result.value.categories;

    return { categories: categories.map(CategoriesPresenter.toHTTP) };
  }
}
