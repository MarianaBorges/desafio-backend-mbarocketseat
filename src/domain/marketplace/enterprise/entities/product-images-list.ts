import { WatchedList } from 'src/core/entities/watched-list';
import { ProductImages } from './product-images';

export class ProductImagesList extends WatchedList<ProductImages> {
  compareItems(a: ProductImages, b: ProductImages): boolean {
    return a.imageId.equals(b.imageId);
  }
}
