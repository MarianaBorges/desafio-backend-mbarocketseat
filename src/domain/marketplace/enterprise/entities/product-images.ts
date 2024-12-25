import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from './value-objects/unique-entity-id';

export interface ProductImagesProps {
  imageId: UniqueEntityID;
  productId: UniqueEntityID;
}
export class ProductImages extends Entity<ProductImagesProps> {
  get imageId() {
    return this.props.imageId;
  }

  get productId() {
    return this.props.productId;
  }

  static create(props: ProductImagesProps, id?: UniqueEntityID) {
    const productImages = new ProductImages(props, id);
    return productImages;
  }
}
