var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, } from 'sequelize-typescript';
let Item = class Item extends Model {
};
__decorate([
    PrimaryKey,
    AutoIncrement,
    AllowNull(false),
    Column({
        type: DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.ARRAY(DataType.STRING),
        field: 'capacity_available',
    }),
    __metadata("design:type", Array)
], Item.prototype, "capacityAvailable", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "capacity", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.INTEGER,
        field: 'price_regular',
    }),
    __metadata("design:type", Number)
], Item.prototype, "priceRegular", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.INTEGER,
        field: 'price_discount',
    }),
    __metadata("design:type", Number)
], Item.prototype, "priceDiscount", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.ARRAY(DataType.STRING),
        field: 'colors_available',
    }),
    __metadata("design:type", Array)
], Item.prototype, "colorsAvailable", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "color", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.ARRAY(DataType.STRING),
    }),
    __metadata("design:type", Array)
], Item.prototype, "images", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.ARRAY(DataType.JSON),
    }),
    __metadata("design:type", Array)
], Item.prototype, "description", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "screen", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "resolution", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "processor", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "ram", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "camera", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.STRING,
    }),
    __metadata("design:type", String)
], Item.prototype, "zoom", void 0);
__decorate([
    AllowNull(false),
    Column({
        type: DataType.ARRAY(DataType.STRING),
    }),
    __metadata("design:type", Array)
], Item.prototype, "cell", void 0);
Item = __decorate([
    Table({
        tableName: 'items',
        createdAt: false,
        updatedAt: false,
    })
], Item);
export { Item };
//# sourceMappingURL=Item.js.map