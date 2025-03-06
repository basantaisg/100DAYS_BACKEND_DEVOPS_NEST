import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../model/User.model';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async getUser() {
    return this.usersService.getUsers();
  }

  @Mutation(() => User)
  async createUser(@Args('CreateUserDto') createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
