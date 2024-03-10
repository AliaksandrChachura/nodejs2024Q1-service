import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, CreateUserDto> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
  })
  id: string; // uuid v4

  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @ApiProperty({ example: '112345', description: 'Password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '1', description: 'Version' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  version: number; // integer number, increments on update

  @ApiProperty({ example: '11-12-2014', description: 'Creation date' })
  @Column({ type: DataType.DATE })
  createdAt: number; // timestamp of creation

  @ApiProperty({ example: '11-12-2014', description: 'Updated date' })
  @Column({ type: DataType.DATE })
  updatedAt: number; // timestamp of last update
}
