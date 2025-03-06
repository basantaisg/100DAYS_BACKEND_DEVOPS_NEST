import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../model/User.model';
import { UsersService } from '../services/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  getUser() {
    return this.usersService;
  }
}
