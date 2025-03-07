import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateUserInput,
  CreateUserSchema,
  UpdateUserInput,
  UpdateUserSchema,
} from '../dto/user.dto';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserInput) {
    const parsedData = CreateUserSchema.parse(data);
    const { password } = data;

    // hashing the password!
    const hashedPassword = await bcrypt.hash(password, 10);

    data.password = hashedPassword;

    return this.prisma.user.create({ data: parsedData });
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updatedUser(id: number, data: UpdateUserInput) {
    const parsedData = UpdateUserSchema.parse(data);
    return this.prisma.user.update({ where: { id }, data: parsedData });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
