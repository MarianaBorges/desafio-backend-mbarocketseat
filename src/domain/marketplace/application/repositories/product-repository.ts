import { ProductDetails } from '../../enterprise/entities/value-objects/product-details';

export abstract class ProductsRepository {
  abstract findDetailsById(id: string): Promise<ProductDetails | null>;
}
