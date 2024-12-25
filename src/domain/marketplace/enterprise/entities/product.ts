import { UniqueEntityID } from './value-objects/unique-entity-id';
import { AggregateRoot } from 'src/core/entities/aggregate-root';
import { Optional } from 'src/core/types/opcional';
import { ProductImagesList } from './product-images-list';

export interface ProductProps {
  title: string;
  desc: string;
  valueInCents: number;
  categoryId: UniqueEntityID;
  status: string;
  userId: UniqueEntityID;
  images: ProductImagesList;
  createdAt: Date;
  updatedAt?: Date;
}

export class Product extends AggregateRoot<ProductProps> {
  get title() {
    return this.props.title;
  }

  get desc() {
    return this.props.desc;
  }

  get valueInCents() {
    return this.props.valueInCents;
  }

  get status() {
    return this.props.status;
  }

  get images() {
    return this.props.images;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set title(title: string) {
    this.props.title = title;
    this.touch();
  }

  set desc(desc: string) {
    this.props.desc = desc;
    this.touch();
  }

  set valueInCents(valueInCents: number) {
    this.valueInCents = valueInCents;
    this.touch();
  }

  set status(status: string) {
    this.status = status;
    this.touch();
  }

  set images(images: ProductImagesList) {
    this.props.images = images;
    this.touch();
  }

  static create(
    props: Optional<ProductProps, 'createdAt' | 'images'>,
    id?: UniqueEntityID,
  ) {
    const question = new Product(
      {
        ...props,
        images: props.images ?? new ProductImagesList(),
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
    return question;
  }
}
