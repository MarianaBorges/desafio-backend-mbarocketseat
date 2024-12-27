import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from './value-objects/unique-entity-id';

interface ImageProps {
  title: string;
  url: string;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Image extends Entity<ImageProps> {
  get title() {
    return this.props.title;
  }

  get url() {
    return this.props.url;
  }
  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(props: ImageProps, id?: UniqueEntityID) {
    const image = new Image(props, id);
    return image;
  }
}
