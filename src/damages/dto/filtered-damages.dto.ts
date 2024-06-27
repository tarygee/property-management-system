/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
export class FilteredDamagesDto {
  @IsString()
  startDate: string;

  @IsString()
  endDate: string;
}
