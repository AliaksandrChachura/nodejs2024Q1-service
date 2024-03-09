import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../interfaces/interfaces';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.findById(id);
  }

  @Post()
  createUser(@Body() createUserDto: Pick<User, 'login' | 'password'>): User {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<User>,
  ): User {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(@Param('id') id: string): void {
    this.userService.delete(id);
  }
}
