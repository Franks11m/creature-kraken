/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {KrakensService} from './krakens.service';
import { CreateKrakenDto } from './dto/create-kraken.dto';
import { UpdateKrakenDto } from './dto/update-kraken.dto';

@Controller('krakens')
export class KrakensController {
  constructor(private readonly krakensService: KrakensService) {}

  @Post()
  create(@Body() createKrakenDto: CreateKrakenDto) {
    return this.krakensService.create(createKrakenDto);
  }

  @Get()
  findAll() {
    return this.krakensService.findAllAlive();
 }
  @Get ('extinct')//localhost:3000/creature/extinct
  findAllExtinct() {
    return this.krakensService.findAllExtinct();
  }

  @Get(':id')//localhost:3000/creature/extinct
  findOne(@Param('id') id: string) {
    return this.krakensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKrakenDto: UpdateKrakenDto) {
    return this.krakensService.update(+id, updateKrakenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.krakensService.remove(+id);
  }
}
