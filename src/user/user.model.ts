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
    primaryKey: true,
  })
  public id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  sex: number;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
