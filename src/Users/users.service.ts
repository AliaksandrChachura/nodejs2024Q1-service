import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { DbService } from 'src/db/db.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async getAllUsers() {
    return this.db.users;
  }

  async findById(id: string) {
    const user = this.db.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = new UserEntity(createUserDto);
    const existingUser = this.db.users.find(
      (user) => user.login === newUser.login,
    );
    if (existingUser) {
      throw new HttpException(
        'User with the same name already exists',
        HttpStatus.CONFLICT,
      );
    }
    this.db.users.push(newUser);
    return newUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const currentUser = await this.findById(id);

    if (currentUser.password !== updateUserDto.oldPassword) {
      throw new HttpException('Old password does not match', 403);
    }
    currentUser.password = updateUserDto.newPassword;
    currentUser.version = currentUser.version + 1;
    currentUser.updatedAt = Date.now();
    return currentUser;
  }

  async delete(id: string) {
    const currentUser = await this.findById(id);
    const index = this.db.users.findIndex((u) => u.id === currentUser.id);
    if (index !== -1) {
      this.db.users.splice(index, 1);
    }
  }
}
