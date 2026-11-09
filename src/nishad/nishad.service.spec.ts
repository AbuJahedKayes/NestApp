import { Test, TestingModule } from '@nestjs/testing';
import { NishadService } from './nishad.service';

describe('NishadService', () => {
  let service: NishadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NishadService],
    }).compile();

    service = module.get<NishadService>(NishadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
