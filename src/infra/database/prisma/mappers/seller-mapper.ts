import { User as PrismaSeller } from '@prisma/client';

import { Seller } from 'src/domain/marketplace/enterprise/entities/seller';
import { UniqueEntityID } from 'src/domain/marketplace/enterprise/entities/value-objects/unique-entity-id';

export class PrismaSellerMapper {
  static toDomain(raw: PrismaSeller): Seller {
    return Seller.create(
      {
        email: raw.email,
        name: raw.name,
        password: raw.password,
        phone: raw.phone,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
