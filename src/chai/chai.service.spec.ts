import { Test, TestingModule } from '@nestjs/testing';
import { ChaiService } from './chai.service';

describe('ChaiService', () => {
  let service: ChaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChaiService],
    }).compile();

    service = module.get<ChaiService>(ChaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
