// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ScheduleService } from '../service/schedule.service';
// import { CreateScheduleDto } from '../dto/create-schedule.dto';
// import { UpdateScheduleDto } from '../dto/update-schedule.dto';

// @Controller('schedule')
// export class ScheduleController {
//   constructor(private readonly scheduleService: ScheduleService) {}

//   @Post()
//   create(@Body() createScheduleDto: CreateScheduleDto) {
//     return this.scheduleService.create(createScheduleDto);
//   }

//   @Get()
//   findAll() {
//     return this.scheduleService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.scheduleService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateScheduleDto: UpdateScheduleDto,
//   ) {
//     return this.scheduleService.update(+id, updateScheduleDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.scheduleService.remove(+id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ScheduleService } from '../service/schedule.service';
import { CreateScheduleDto } from '../dto/create-schedule.dto';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('schedule')
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    return await this.scheduleService.create(createScheduleDto);
  }

  @Get('all')
  async findAll() {
    return await this.scheduleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const schedule = await this.scheduleService.findOne(id);
    if (!schedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
    return schedule;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    const updatedSchedule = await this.scheduleService.update(
      id,
      updateScheduleDto,
    );
    if (!updatedSchedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
    return updatedSchedule;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.scheduleService.remove(id);
  }
}
