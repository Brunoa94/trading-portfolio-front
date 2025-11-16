import z from "zod";

export const UserOverviewSchema = z.object({
  balance: z.number(),
  value_invested: z.number(),
  margin: z.number(),
});

export const UserDetailsSchema = z.object({
  username: z.string(),
  email: z.string(),
  address: z.string(),
  country: z.string(),
  icon: z.string(),
  id: z.number(),
});

export type UserOverviewI = z.infer<typeof UserOverviewSchema>;
