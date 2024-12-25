import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from './value-objects/unique-entity-id';

interface SellerProps {
  name: string;
  email: string;
  password: string;
}

export class Seller extends Entity<SellerProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  static create(props: SellerProps, id?: UniqueEntityID) {
    const student = new Seller(props, id);
    return student;
  }
}
