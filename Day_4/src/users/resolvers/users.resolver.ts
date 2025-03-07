import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { CreateUserInput, UpdateUserInput } from '../dto/user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput) {
    return this.usersService.createUser(data);
  }

  @Query(() => [User])
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Query(() => User, { nullable: true })
  async getUserById(@Args('íd') id: string) {
    return this.usersService.getUserById(id);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ) {
    return this.usersService.updatedUser(id, data);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
