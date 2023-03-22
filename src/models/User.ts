import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  createdAt: false,
  updatedAt: false,
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    id: number;

  @Unique
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    email: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    password: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'activation_token',
  })
    activationToken: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'refresh_token',
  })
    refreshToken: string;

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
  })
    cart: number[];
}
