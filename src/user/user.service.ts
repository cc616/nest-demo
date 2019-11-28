import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
// import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  constructor(
    @Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof User,
  ) {}

  create(user: User) {
    this.users.push(user);
  }

  async findAll(): Promise<User[]> {
    return await this.USER_REPOSITORY.findAll<User>();
  }
}
