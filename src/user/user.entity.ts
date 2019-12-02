import {
  Column,
  Model,
  Table,
  TableOptions,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

const tableOptions: TableOptions = {
  tableName: 'user',
};

@Table(tableOptions)
export class User extends Model<User> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  account: string;

  @Column({
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
