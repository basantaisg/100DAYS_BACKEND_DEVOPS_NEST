import { Module } from '@nestjs/common';
import { UsersResolver } from '../resolvers/users.resolver';
import { UsersService } from '../services/users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
