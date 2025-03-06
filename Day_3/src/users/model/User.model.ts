import { Field, Int } from '@nestjs/graphql';

export class User {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field(() => Int)
  age: number;
  @Field()
  email: string;
}
