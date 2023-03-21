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
}
