import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';import { PannesService } from './pannes.service';

@Controller('pannes')
export class PannesController {
    constructor(private readonly pannesService:PannesService){}

  @Get()
  findAll() {
    return this.pannesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pannesService.getOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pannesService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    return this.pannesService.update(id, body);
  }

  @Post()
  create(@Body() body: any) {
    return this.pannesService.create(body);
  }
}
