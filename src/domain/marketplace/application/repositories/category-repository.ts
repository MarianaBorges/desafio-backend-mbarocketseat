import { Category } from '../../enterprise/entities/category';

export abstract class CategoryRepository {
  abstract getAll(): Promise<Category[] | null>;
}
