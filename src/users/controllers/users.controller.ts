import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersSignUpDto } from '../dto/user-signup.dto';
import { UsersSignInUserDto } from '../dto/user-signin.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() usersSignUpDto: UsersSignUpDto) {
    return this.usersService.signup(usersSignUpDto);
  }

  @Post('signin')
  async signin(@Body() usersSignInDto: UsersSignInUserDto) {
    return this.usersService.signin(usersSignInDto);
  }

  @Get('all')
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.usersService.remove(+id);
  }
}
