import { Prisma, Image as PrismaImage } from '@prisma/client';

import { Image } from 'src/domain/marketplace/enterprise/entities/image';
import { UniqueEntityID } from 'src/domain/marketplace/enterprise/entities/value-objects/unique-entity-id';

export class PrismaImageMapper {
  static toDomain(raw: PrismaImage): Image {
    return Image.create(
      {
        title: raw.title,
        url: raw.url,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPrisma(image: Image): Prisma.ImageUncheckedCreateInput {
    return {
      id: image.id.toString(),
      title: image.title,
      url: image.url,
    };
  }
}
