import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ReportDamageDto } from '../dto/report-damage.dto';
import { UpdateDamageDto } from '../dto/update-damage.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DamageEntity } from '../entities/damage.entity';

@Injectable()
export class DamagesService {
  constructor(
    @InjectRepository(DamageEntity)
    private readonly damageRepository: Repository<DamageEntity>,
  ) {}
  async create(reportDamageDto: ReportDamageDto) {
    const damagedItem = this.damageRepository.create(reportDamageDto);
    this.damageRepository.save(damagedItem);
    if (damagedItem) throw new BadRequestException(' Item is already reported');
    return await damagedItem;
  }

  async findAll() {
    const allItems = this.damageRepository.find();
    return await allItems;
  }

  async findOne(id: number): Promise<DamageEntity> {
    const item = this.damageRepository.findOneBy({ id });
    if (!item) throw new NotFoundException('This item does not exist');
    return await item;
  }

  async update(id: number, updateDamageDto: UpdateDamageDto) {
    await this.damageRepository.update(id, updateDamageDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.damageRepository.delete(id);
  }
}
