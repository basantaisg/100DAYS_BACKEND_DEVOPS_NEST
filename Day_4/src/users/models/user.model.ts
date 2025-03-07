import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
