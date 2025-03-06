import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../model/User.model';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersResolver) {}

  @Query(() => User)
  getUser() {
    return this.usersService.getUser();
  }
}
