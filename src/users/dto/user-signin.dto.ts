/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class UsersSignInUserDto {
  @IsNotEmpty({})
  @IsString({})
  email: string
  
  @IsNotEmpty({})
  @MinLength(8, {})
  @IsString({})
  password: string;
}
