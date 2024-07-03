import { Module } from '@nestjs/common';
import { ScheduleService } from '../service/schedule.service';
import { ScheduleController } from '../controller/schedule.controller';
import { ScheduleEntity } from '../entities/schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleEntity])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
