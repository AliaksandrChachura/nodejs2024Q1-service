import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/interfaces';

@Injectable()
export class UserService {
  private readonly users: User[] = []; // In-memory storage

  findAll(): User[] {
    return this.users;
  }

  // Other CRUD operations (create, find by ID, update, delete)
}
