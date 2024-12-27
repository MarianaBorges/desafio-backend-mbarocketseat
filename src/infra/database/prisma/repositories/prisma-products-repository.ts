import { Injectable } from '@nestjs/common';

import { ProductsRepository } from 'src/domain/marketplace/application/repositories/product-repository';
import { ProductDetails } from 'src/domain/marketplace/enterprise/entities/value-objects/product-details';

import { PrismaService } from '../prisma.service';
import { PrismaProductDetailsMapper } from '../mappers/product-details-mapper';

@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async findDetailsById(id: string): Promise<ProductDetails | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        images: true,
        user: true,
        category: true,
      },
    });

    if (!product) return null;

    return PrismaProductDetailsMapper.toDomain(product);
  }
}
