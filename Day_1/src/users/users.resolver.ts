import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  //   Query!
  @Query(() => [String])
  getUsers() {
    return this.usersService.findAll();
  }
}
