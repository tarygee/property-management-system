import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyEntity } from '../entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(PropertyEntity)
    private readonly propertyRepository: Repository<PropertyEntity>,
  ) {}
  async create(createPropertyDto: CreatePropertyDto) {
    const newProperty = this.propertyRepository.create(createPropertyDto);
    return await this.propertyRepository.save(newProperty);
  }

  async findAll(): Promise<PropertyEntity[]> {
    const properties = await this.propertyRepository.find();
    return await this.propertyRepository.save(properties);
  }

  async findOne(id: number) {
    const property = await this.propertyRepository.findOneBy({ id });
    if (!property) throw new NotFoundException('Property not found');
    return property;
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const property = await this.propertyRepository.update(
      { id },
      { ...updatePropertyDto },
    );
    return property;
  }

  async remove(id: number) {
    return await this.propertyRepository.delete({ id });
  }
}
