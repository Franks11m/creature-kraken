/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateKrakenDto } from './dto/create-kraken.dto';
import { UpdateKrakenDto } from './dto/update-kraken.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KrakensService {
  constructor( private prisma: PrismaService) {}

  create(createKrakenDto: CreateKrakenDto) {
    return this.prisma.kraken.create({
      data: createKrakenDto,
    });
  }

  findAllAlive() {
    return this.prisma.kraken.findMany({
      where: { extinct: false},
    });
  }
  findAllExtinct() {
    return this.prisma.kraken.findMany({
      where: { extinct: true },
    });
  }

  findOne(id: number) {
    return this.prisma.kraken.findUnique({
      where: {id}
    })
  }

  update(id: number, updateKrakenDto: UpdateKrakenDto) {
    return this.prisma.kraken.update({
      where: {id},
      data: updateKrakenDto,
    })
  }

  remove(id: number) {
    return this.prisma.kraken.delete({
      where: {id}
    });
  }
}
