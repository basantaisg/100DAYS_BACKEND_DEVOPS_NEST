import { InputType, Field, Int } from '@nestjs/graphql';
import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number().int().positive(),
  username: z.string().min(3),
  password: z.string().min(3).max(4),
});

@InputType()
export class CreateUserInput {
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
}

// For UpdateUser!

export const UpdateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  age: z.number().int().positive().optional(),
  username: z.string().min(3).optional(),
  password: z.string().min(3).max(4).optional(),
});

// For gql!

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;
}
