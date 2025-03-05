import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        username: createUserInput.username,
        email: createUserInput.email,
        name: createUserInput.name,
      },
    });
  }
}
