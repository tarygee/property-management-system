/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Status } from 'src/damages/utility/common/property-status';

export class UpdateDamageDto {
  @IsNotEmpty({ message: 'name should not be empty' })
  status: Status;
}
