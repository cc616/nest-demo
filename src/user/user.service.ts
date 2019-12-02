import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.account = createUserDto.account;
    user.age = createUserDto.age;
    user.role = createUserDto.role;

    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await this.USER_REPOSITORY.findAll<User>();
  }

  async findOne(id: string): Promise<User> {
    return await this.USER_REPOSITORY.findOne<User>({
      where: { id },
    });
  }
}
