import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Status } from 'src/damages/utility/common/property-status';

export class ReportDamageDto {
  @IsString({ message: 'name should be a string' })
  @IsNotEmpty({ message: 'name should not be empty' })
  name: string;

  @IsString({})
  @IsNotEmpty({ message: 'description should filled' })
  serialNumber: string;

  @IsString({})
  @IsNotEmpty({ message: 'description should filled' })
  college: string;

  @IsString({})
  @IsNotEmpty({ message: 'description should filled' })
  block: string;

  @IsNumber({})
  @IsNotEmpty({ message: 'description should filled' })
  roomNumber: number;

  @IsString({ message: 'description should be a string' })
  @IsNotEmpty({ message: 'description should filled' })
  description: string;

  @IsNotEmpty({})
  status: Status[];
}
