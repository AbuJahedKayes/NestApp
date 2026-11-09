import { Test, TestingModule } from '@nestjs/testing';
import { KayesService } from './kayes.service';

describe('KayesService', () => {
  let service: KayesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KayesService],
    }).compile();

    service = module.get<KayesService>(KayesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
