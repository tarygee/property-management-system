/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class UsersSignInUserDto {
  @IsNotEmpty({})
  @IsString({})
  regNumber: string
  
  @IsNotEmpty({ message: 'Password can not be null'})
  @MinLength(8, {message: 'Password should have a min lenth of 8'})
  password: string;
}
