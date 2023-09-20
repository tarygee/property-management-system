import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { UsersSignUpDto } from '../dto/user-signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { Compare } from 'bcrypt';
import { UsersSignInUserDto } from '../dto/user-signin.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async signup(usersSignUpDto: UsersSignUpDto) {
    const userExists = await this.findUserByregNumber(usersSignUpDto.regNumber);
    if (userExists) throw new BadRequestException('User Already exists');
    // usersSignUpDto.password = await hash(usersSignUpDto.password);
    const user = await this.userRepository.create(usersSignUpDto);
    await this.userRepository.save(user);
    delete user.password;
    return user;
  }

  async signin(usersSignInDto: UsersSignInUserDto) {
    const userExists = this.userRepository
      .createQueryBuilder('users') //the table name
      .addSelect('users.password') //name of the column we want to select
      .where('users.regNumber=:regNumber', {
        regNumber: usersSignInDto.regNumber,
      })
      .getOne(); // is a method of the query builder that returns the first result of the query, or null if no results are found.
    if (!userExists) throw new BadRequestException('Bad credentials entered');
    const matchPassword = await Compare(
      usersSignInDto.password,
      (await userExists).password,
    );
    if (!matchPassword)
      throw new BadRequestException('Bad Credentials entered');
    delete (await userExists).password;
    return userExists;
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    return await this.userRepository.save(users);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update({ id }, { ...updateUserDto });
    return user;
  }

  async remove(id: number) {
    return this.userRepository.delete({ id });
  }

  async findUserByregNumber(regNumber: string) {
    return await this.userRepository.findOneBy({ regNumber });
  }
}
