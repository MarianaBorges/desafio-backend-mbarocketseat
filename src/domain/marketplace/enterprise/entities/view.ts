import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from './value-objects/unique-entity-id';
import { Optional } from 'src/core/types/opcional';

interface ViewProps {
  productId: UniqueEntityID;
  sellerId: UniqueEntityID;
  createdAt: Date;
}

export class View extends Entity<ViewProps> {
  get productId() {
    return this.productId;
  }

  get sellerId() {
    return this.sellerId;
  }

  set productId(productId: UniqueEntityID) {
    this.productId = productId;
  }

  set sellerId(sellerId: UniqueEntityID) {
    this.sellerId = sellerId;
  }

  static create(props: Optional<ViewProps, 'createdAt'>, id?: UniqueEntityID) {
    const view = new View(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
    return view;
  }
}
