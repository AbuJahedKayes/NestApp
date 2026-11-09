import { Test, TestingModule } from '@nestjs/testing';
import { KayesController } from './kayes.controller';

describe('KayesController', () => {
  let controller: KayesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KayesController],
    }).compile();

    controller = module.get<KayesController>(KayesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
