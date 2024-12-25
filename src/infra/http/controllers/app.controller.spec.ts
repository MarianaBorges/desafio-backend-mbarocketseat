import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../../../app.service';
import { GetCategoriesController } from './getCategories.controller';
describe('AppController', () => {
  let appController: GetCategoriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetCategoriesController],
      providers: [AppService],
    }).compile();

    appController = app.get<GetCategoriesController>(GetCategoriesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
