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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User as UserModel } from './user.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Getting all users' })
  @ApiResponse({ status: 200, type: UserModel })
  @Get()
  findAll(): User[] {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Getting user by ID' })
  @ApiResponse({ status: 200, type: [UserModel] })
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.findById(id);
  }

  @ApiOperation({ summary: 'Creating new user' })
  @ApiResponse({ status: 201, type: UserModel })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, type: UserModel })
  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<User>,
  ): User {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, type: UserModel })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(@Param('id') id: string): void {
    this.userService.delete(id);
  }
}
