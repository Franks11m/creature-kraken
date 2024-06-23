/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { KrakensService } from './krakens.service';
import { KrakensController } from './krakens.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [KrakensController],
  providers: [KrakensService],
  imports: [PrismaModule],
})
export class KrakensModule {}
