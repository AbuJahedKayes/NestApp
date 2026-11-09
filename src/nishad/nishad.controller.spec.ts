import { Test, TestingModule } from '@nestjs/testing';
import { NishadController } from './nishad.controller';

describe('NishadController', () => {
  let controller: NishadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NishadController],
    }).compile();

    controller = module.get<NishadController>(NishadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
