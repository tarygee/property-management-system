import { BadRequestException, Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { UsersSignUpDto } from './dto/user-signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }
  async signup(usersSignUpDto: UsersSignUpDto) {
    const userExists = await this.findUserByregNumber(usersSignUpDto.regNumber);
    if (userExists) throw new BadRequestException('User Already exists');
    usersSignUpDto.password = await hash(usersSignUpDto.password);
    const user = await this.userRepository.create(usersSignUpDto);
    await this.userRepository.save(user);
    delete user.password;
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByregNumber(regNumber: string) {
    return await this.userRepository.findOneBy({ regNumber });
  }
}
