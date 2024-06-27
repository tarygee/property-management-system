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

  async findFilteredDamage(
    startDate: Date,
    endDate: Date,
  ): Promise<DamageEntity[]> {
    // Example query to filter damage items based on date range
    // try {
    //   const data = await this.damageRepository
    //     .createQueryBuilder('damages')
    //     .where('damages.createAt   BETWEEN :startDate AND :endDate', {
    //       startDate,
    //       endDate,
    //     })
    //     .getMany();
    //   return data;
    // } catch {
    //   throw new NotFoundException('Failed to find filtered damage');
    // }

    try {
      const data = await this.damageRepository
        .createQueryBuilder('damages')
        .select([
          'damages.id',
          'damages.name',
          'damages.serialNumber',
          'damages.block',
          'damages.description',
          'DATE(damages.createAt) as createAt', // Extract only the date part
        ])
        .where('DATE(damages.createAt) BETWEEN :startDate AND :endDate', {
          startDate,
          endDate,
        })
        .getRawMany();
      return data;
    } catch {
      throw new NotFoundException('Failed to find filtered damage');
    }
  }
}
