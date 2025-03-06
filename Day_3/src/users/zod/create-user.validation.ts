import { z } from 'zod';

export const CreateUserValidation = z.object({
  name: z.string().min(3),
  age: z.number().min(13),
  email: z.string().email(),
});
