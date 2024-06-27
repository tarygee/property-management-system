import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { DamagesService } from '../service/damages.service';
import { ReportDamageDto } from '../dto/report-damage.dto';
import { UpdateDamageDto } from '../dto/update-damage.dto';
import { DamageEntity } from '../entities/damage.entity';

@Controller('damages')
export class DamagesController {
  constructor(private readonly damagesService: DamagesService) {}

  @Post('submit')
  async create(@Body() reportDamageDto: ReportDamageDto) {
    try {
      return await this.damagesService.create(reportDamageDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('all')
  async findAll() {
    return await this.damagesService.findAll();
  }

  @Get('damage/:id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.damagesService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Patch('damage/:id')
  async update(
    @Param('id') id: number,
    @Body() updateDamageDto: UpdateDamageDto,
  ) {
    try {
      return await this.damagesService.update(id, updateDamageDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('filteredDamage')
  async filteredDamage(
    @Body() filteredDate: any,
    // TODO: CHECK DATATYPES
  ): Promise<DamageEntity[]> {
    const { startDate, endDate } = filteredDate;
    // console.log('body json',filteredDate);
    if (!startDate || !endDate) {
      throw new NotFoundException('Start date and end date must be provided');
    }

    console.log(`startDate ${startDate}`);
    console.log(`endDate ${endDate}`);

    try {
      const filteredData = await this.damagesService.findFilteredDamage(
        new Date(startDate),
        new Date(endDate),
      );
      console.log(filteredData);
      return filteredData;
    } catch (error) {
      throw new NotFoundException('failed to find filtered data');
    }
  }

  @Delete('damage/:id')
  async remove(@Param('id') id: number) {
    try {
      await this.damagesService.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
