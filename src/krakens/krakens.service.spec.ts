import { Test, TestingModule } from '@nestjs/testing';
import { KrakensService } from './krakens.service';

describe('KrakensService', () => {
  let service: KrakensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KrakensService],
    }).compile();

    service = module.get<KrakensService>(KrakensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
