import { Module } from '@nestjs/common';
import { PrismaCategoriesRepository } from './prisma/repositories/prisma-categories-repository';
import { CategoryRepository } from 'src/domain/marketplace/application/repositories/category-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: CategoryRepository,
      useClass: PrismaCategoriesRepository,
    },
  ],
  exports: [CategoryRepository, PrismaService],
})
export class DatabaseModule {}
