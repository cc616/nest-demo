import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.age = createUserDto.age;
    user.address = createUserDto.address;
    user.sex = createUserDto.sex;

    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll<User>({
      attributes: ['id', 'username', 'address', 'age', 'sex'],
    });
  }

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findOne<User>({
      where: { id },
      attributes: ['id', 'username', 'address', 'age', 'sex'],
    });
  }

  async findOneByName(name: string): Promise<User> {
    return await this.userModel.findOne<User>({
      where: { username: name },
      attributes: ['id', 'username', 'password'],
    });
  }
}
