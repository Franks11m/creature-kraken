import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KrakensModule } from './krakens/krakens.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [KrakensModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
