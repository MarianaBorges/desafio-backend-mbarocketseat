import {
  Product as PrismaProduct,
  Image as PrismaImage,
  User as PrismaUser,
  Category as PrismaCategory,
} from '@prisma/client';

import { ProductDetails } from 'src/domain/marketplace/enterprise/entities/value-objects/product-details';

import { PrismaImageMapper } from './images-mapper';
import { Category } from 'src/domain/marketplace/enterprise/entities/category';
import { UniqueEntityID } from 'src/domain/marketplace/enterprise/entities/value-objects/unique-entity-id';
import { PrismaSellerMapper } from './seller-mapper';

type PrismaProductsDetails = PrismaProduct & {
  images: PrismaImage[];
  user: PrismaUser;
  category: PrismaCategory;
};

export class PrismaProductDetailsMapper {
  static toDomain(raw: PrismaProductsDetails): ProductDetails {
    console.log(raw.user);

    return ProductDetails.create({
      productId: raw.id,
      category: Category.create(
        raw.category,
        new UniqueEntityID(raw.category.id),
      ),
      desc: raw.desc,
      status: raw.status,
      title: raw.title,
      valueInCents: raw.valueInCents,
      images: raw.images.map(PrismaImageMapper.toDomain),
      user: PrismaSellerMapper.toDomain(raw.user),
    });
  }
}
