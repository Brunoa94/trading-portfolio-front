import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginUserT = z.infer<typeof LoginSchema>;
