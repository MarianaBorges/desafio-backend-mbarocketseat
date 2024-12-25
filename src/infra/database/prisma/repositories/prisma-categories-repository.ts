import { CategoryRepository } from 'src/domain/marketplace/application/repositories/category-repository';
import { Category } from 'src/domain/marketplace/enterprise/entities/category';
import { PrismaService } from '../prisma.service';
import { PrismaCategoryMapper } from '../mappers/categories-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCategoriesRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Category[] | null> {
    const categories = await this.prisma.category.findMany();

    if (!categories) return null;

    return categories.map(PrismaCategoryMapper.toDomain);
  }
}
