import { Module } from '@nestjs/common';
import { MaterielsService } from './materiels.service';
import { MaterielsController } from './materiels.controller';
import { Materiels } from './materiels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports:[TypeOrmModule.forFeature([Materiels])],
  providers: [MaterielsService],
  controllers: [MaterielsController]
})
export class MaterielsModule {}
