import { z } from 'zod';

export const SignupValidation = z.object({
  name: z.string().min(3, 'Too short'),
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 6 characters long'),
});
