import { Module } from '@nestjs/common';
import { DamagesService } from '../service/damages.service';
import { DamagesController } from '../controller/damages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DamageEntity } from '../entities/damage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DamageEntity])],
  controllers: [DamagesController],
  providers: [DamagesService],
})
export class DamagesModule {}
