/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { Status } from 'src/users/utility/common/property-status';

export class StatusChangeDto {
  @IsNotEmpty()
  @IsString()
  serialNumber: string;

  @IsNotEmpty()
  @IsString()
  status: Status;
}
