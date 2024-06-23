import { Test, TestingModule } from '@nestjs/testing';
import { KrakensController } from './krakens.controller';
import { KrakensService } from './krakens.service';

describe('KrakensController', () => {
  let controller: KrakensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KrakensController],
      providers: [KrakensService],
    }).compile();

    controller = module.get<KrakensController>(KrakensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
