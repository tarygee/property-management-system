import { PartialType } from '@nestjs/mapped-types';
import { UsersSignUpDto } from './user-signup.dto';

export class UpdateUserDto extends PartialType(UsersSignUpDto) {}
