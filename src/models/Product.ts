import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
  createdAt: false,
  updatedAt: false
})
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    category: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'phone_id'
  })
    phoneId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'full_price'
  })
    fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER
  })
    year: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
    image: string;
}
