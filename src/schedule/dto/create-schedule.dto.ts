import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { MaintenanceType } from '../utility/common/maintenance-type';
import { Category } from '../utility/common/property-category';
import { Type } from 'class-transformer';

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsEnum(Category, { each: true })
  category: Category[];

  @IsNotEmpty({})
  @IsString({})
  propertyName: string;

  @IsNotEmpty({})
  @IsEnum(MaintenanceType, { each: true })
  maintenanceType: MaintenanceType[];

  @IsNotEmpty({})
  @IsDate({})
  @Type(() => Date)
  date: Date;
}
