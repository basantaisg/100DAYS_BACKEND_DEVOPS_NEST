import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
    },
  ];

  getUsers() {
    return this.users;
  }
}
