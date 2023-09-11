/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { UsersSignInUserDto } from './user-signin.dto';

export class UsersSignUpDto extends UsersSignInUserDto{
  @IsNotEmpty({})
  @IsString({message: 'Name must be a string'})
  name: string;

  @IsNotEmpty({ message: 'Email can not be empty'})
  @IsEmail({}, { message: 'Please provide a valid '})
  email: string;

  @IsNotEmpty({ message: 'Roles must be filled'})
  @IsString({ message: 'A role must be a string'})
  role: string;
  
  @IsNotEmpty({message: 'College can neve be empty'})
  @IsString({message: 'college shoul be a string'})
  college: string;
}