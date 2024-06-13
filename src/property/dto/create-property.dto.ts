import { IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../utility/common/property-category';

export class CreatePropertyDto {
  @IsNotEmpty({ message: 'name should not be null' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'serial number should never be null' })
  @IsString({ message: 'Name must be a string' })
  serialNumber: string;

  @IsString({ message: 'category must be a string' })
  @IsNotEmpty({ message: 'Category should not be empty' })
  category: Category[];

  @IsString({ message: 'image must be a string' })
  @IsNotEmpty({ message: 'Image can never be a string' })
  image: string;
}
