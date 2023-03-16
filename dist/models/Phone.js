import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';

const __decorate
  = (this && this.__decorate)
  || function(decorators, target, key, desc) {
    const c = arguments.length;
    let r
      = c < 3
        ? target
        : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc;
    let d;

    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') {
      r = Reflect.decorate(decorators, target, key, desc);
    } else {
      for (let i = decorators.length - 1; i >= 0; i--) {
        if ((d = decorators[i])) {
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
      }
    }

    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
const __metadata
  = (this && this.__metadata)
  || function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') {
      return Reflect.metadata(k, v);
    }
  };

let Phone = class Phone extends Model {};

__decorate(
  [
    PrimaryKey,
    AutoIncrement,
    AllowNull(false),
    Column({
      type: DataType.INTEGER,
    }),
    __metadata('design:type', Number),
  ],
  Phone.prototype,
  'id',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'category',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
      field: 'phone_id',
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'phoneId',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'name',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.INTEGER,
      field: 'full_price',
    }),
    __metadata('design:type', Number),
  ],
  Phone.prototype,
  'fullPrice',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.INTEGER,
    }),
    __metadata('design:type', Number),
  ],
  Phone.prototype,
  'price',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'screen',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'capacity',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'color',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'ram',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.INTEGER,
    }),
    __metadata('design:type', Number),
  ],
  Phone.prototype,
  'year',
  void 0,
);

__decorate(
  [
    AllowNull(false),
    Column({
      type: DataType.STRING,
    }),
    __metadata('design:type', String),
  ],
  Phone.prototype,
  'image',
  void 0,
);

Phone = __decorate(
  [
    Table({
      tableName: 'phones',
      createdAt: false,
      updatedAt: false,
    }),
  ],
  Phone,
);
export { Phone };
// # sourceMappingURL=Phone.js.map
