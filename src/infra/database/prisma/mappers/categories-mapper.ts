import { Category as PrismaCategory } from '@prisma/client';
import { Category } from 'src/domain/marketplace/enterprise/entities/category';
import { UniqueEntityID } from 'src/domain/marketplace/enterprise/entities/value-objects/unique-entity-id';

export class PrismaCategoryMapper {
  static toDomain(raw: PrismaCategory): Category {
    return Category.create(
      {
        desc: raw.desc,
        title: raw.title,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
