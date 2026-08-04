import { Module } from '@nestjs/common';
import { PannesService } from './pannes.service';
import { PannesController } from './pannes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pannes } from './pannes.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pannes])],
  providers: [PannesService],
  controllers: [PannesController]
})
export class PannesModule {}
