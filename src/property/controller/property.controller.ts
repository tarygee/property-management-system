import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyService } from '../services/property.service';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post('submit')
  async create(@Body() createPropertyDto: CreatePropertyDto) {
    return await this.propertyService.create(createPropertyDto);
  }

  @Get('all')
  async findAll() {
    return await this.propertyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.propertyService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return await this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.propertyService.remove(+id);
  }
}
