import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './Model/user.model';
import { CreateUserInput } from './dto/create-user.dto';

@Resolver()
export class UserResolver {
  constructor() {}

  @Query(() => [User])
  async users() {
    return [];
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return createUserInput;
  }
}
