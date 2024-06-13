/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import { UsersSignInUserDto } from './user-signin.dto';

export class UsersSignUpDto extends UsersSignInUserDto{
  @IsNotEmpty({})
  @IsString({})
  name: string;

  @IsNotEmpty({})
  @IsString({})
  role: string;
  
}