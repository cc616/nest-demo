import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  account: string;

  @Column
  age: number;

  @Column
  role: string;
}
