import { Module } from '@nestjs/common';
import { PrismaCategoriesRepository } from './prisma/repositories/prisma-categories-repository';
import { CategoryRepository } from 'src/domain/marketplace/application/repositories/category-repository';
import { PrismaService } from './prisma/prisma.service';
import { ProductsRepository } from 'src/domain/marketplace/application/repositories/product-repository';
import { PrismaProductsRepository } from './prisma/repositories/prisma-products-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CategoryRepository,
      useClass: PrismaCategoriesRepository,
    },
    {
      provide: ProductsRepository,
      useClass: PrismaProductsRepository,
    },
  ],
  exports: [PrismaService, CategoryRepository, ProductsRepository],
})
export class DatabaseModule {}
