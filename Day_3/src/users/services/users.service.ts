import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserInput: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserInput });
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
