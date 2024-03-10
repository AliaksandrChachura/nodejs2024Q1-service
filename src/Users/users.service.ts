import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../interfaces/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  findById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: uuidv4(),
      ...createUserDto,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, updateUserDto: Partial<User>): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
      updatedAt: Date.now(),
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  delete(id: string): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    this.users.splice(userIndex, 1);
  }
}
