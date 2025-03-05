import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './Model/user.model';
import { CreateUserInput } from './dto/create-user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async findAllUsers() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
}
