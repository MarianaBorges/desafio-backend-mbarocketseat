import { Module } from '@nestjs/common';
import { GetCategoriesController } from './controllers/getCategories.controller';
import { CategoriesUseCase } from 'src/domain/marketplace/application/use-cases/get-categories';
import { DatabaseModule } from '../database/database.module';
import { AppService } from 'src/app.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GetCategoriesController],
  providers: [CategoriesUseCase, AppService],
})
export class HttpModule {}
