import { Injectable, NotFoundException } from '@nestjs/common';
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
  // async create(reportDamageDto: ReportDamageDto) {
  //   const damagedItem = this.damageRepository.create(reportDamageDto);
  //   this.damageRepository.save(damagedItem);
  //   return await damagedItem;
  // }
  async create(reportDamageDto: ReportDamageDto) {
    // Check if the damaged item already exists
    const existingItem = await this.damageRepository.findOne({
      where: {
        serialNumber: reportDamageDto.serialNumber,
      },
    });
    if (existingItem) {
      return existingItem;
    }
    // If the item does not exist, create a new one
    const damagedItem = this.damageRepository.create(reportDamageDto);
    await this.damageRepository.save(damagedItem);
    return damagedItem;
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
    const updatedDamage = await this.damageRepository.update(
      id,
      updateDamageDto,
    );
    return updatedDamage;
  }

  async remove(serialNumber: string) {
    await this.damageRepository.delete(serialNumber);
  }

  async findFilteredDamage(
    startDate: Date,
    endDate: Date,
  ): Promise<DamageEntity[]> {
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
