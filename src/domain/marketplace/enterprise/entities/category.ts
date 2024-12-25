import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from './value-objects/unique-entity-id';

interface CategoryProps {
  title: string;
  desc: string;
}

export class Category extends Entity<CategoryProps> {
  get title() {
    return this.props.title;
  }

  get desc() {
    return this.props.desc;
  }

  set title(title: string) {
    this.title = title;
  }

  set desc(desc: string) {
    this.desc = desc;
  }

  static create(props: CategoryProps, id?: UniqueEntityID) {
    const image = new Category(props, id);
    return image;
  }
}
