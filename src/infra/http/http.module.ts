import { Module } from '@nestjs/common';
import { GetCategoriesController } from './controllers/get-categories.controller';
import { CategoriesUseCase } from 'src/domain/marketplace/application/use-cases/get-categories';
import { DatabaseModule } from '../database/database.module';
import { AppService } from 'src/app.service';
import { GetProductByIdUseCase } from 'src/domain/marketplace/application/use-cases/get-product-by-id-use-case';
import { GetProductController } from './controllers/get-product-details';

@Module({
  imports: [DatabaseModule],
  controllers: [GetCategoriesController, GetProductController],
  providers: [CategoriesUseCase, GetProductByIdUseCase, AppService],
})
export class HttpModule {}
