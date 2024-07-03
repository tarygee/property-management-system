import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScheduleDto } from '../dto/create-schedule.dto';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';
import { ScheduleEntity } from '../entities/schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(ScheduleEntity)
    private readonly scheduleRepository: Repository<ScheduleEntity>,
  ) {}
  async create(createScheduleDto: CreateScheduleDto) {
    const schedule = this.scheduleRepository.create(createScheduleDto);
    await this.scheduleRepository.save(schedule);
    return schedule;
  }

  async findAll(): Promise<ScheduleEntity[]> {
    const schedules = await this.scheduleRepository.find();
    return schedules;
  }

  async findOne(id: number) {
    const schedule = await this.scheduleRepository.findOneBy({ id });
    if (!schedule) throw new NotFoundException(' This schedule does not exist');
    return schedule;
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    const updatedSchedule = await this.scheduleRepository.update(
      { id },
      { ...updateScheduleDto },
    );
    return updatedSchedule;
  }

  async remove(id: number): Promise<void> {
    const schedule = await this.findOne(id);
    await this.scheduleRepository.remove(schedule);
  }
}
