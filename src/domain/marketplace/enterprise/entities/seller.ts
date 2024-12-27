import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from './value-objects/unique-entity-id';

interface SellerProps {
  name: string;
  email: string;
  phone: string;
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

  get phone() {
    return this.props.phone;
  }

  set name(name: string) {
    this.name = name;
  }

  set email(email: string) {
    this.email = email;
  }

  set password(password: string) {
    this.password = password;
  }

  set phone(phone: string) {
    this.phone = phone;
  }

  static create(props: SellerProps, id?: UniqueEntityID) {
    const student = new Seller(props, id);
    return student;
  }
}
