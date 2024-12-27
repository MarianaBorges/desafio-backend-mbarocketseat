import { ValueObject } from 'src/core/entities/value-objects';

import { Image } from '../image';
import { Seller } from '../seller';
import { Category } from '../category';

export interface ProductDetailsProps {
  productId: string;
  category: Category;
  desc: string;
  status: string;
  title: string;
  valueInCents: number;
  images: Image[];
  user: Seller;
}

export class ProductDetails extends ValueObject<ProductDetailsProps> {
  get productId() {
    return this.props.productId;
  }

  get category() {
    return this.props.category;
  }

  get desc() {
    return this.props.desc;
  }

  get status() {
    return this.props.status;
  }

  get title() {
    return this.props.title;
  }

  get valueInCents() {
    return this.props.valueInCents;
  }

  get images() {
    return this.props.images;
  }

  get user() {
    return this.props.user;
  }

  static create(props: ProductDetailsProps) {
    return new ProductDetails(props);
  }
}
