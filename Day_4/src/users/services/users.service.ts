import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateUserInput,
  CreateUserSchema,
  UpdateUserInput,
  UpdateUserSchema,
} from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserInput) {
    const parsedData = CreateUserSchema.parse(data);

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
