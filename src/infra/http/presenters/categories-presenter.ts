import { Category } from 'src/domain/marketplace/enterprise/entities/category';

export class CategoriesPresenter {
  static toHTTP(category: Category) {
    return {
      id: category.id.toString(),
      title: category.title,
      desc: category.desc,
    };
  }
}
