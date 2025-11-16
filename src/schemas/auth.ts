import z from "zod";

export const UserSessionSchema = z.object({
  token_type: z.string(),
  access_token: z.string(),
});

export const AuthenticateUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
