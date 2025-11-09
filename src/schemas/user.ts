import z from "zod";

export const UserOverviewSchema = z.object({
  balance: z.number(),
  value_invested: z.number(),
  margin: z.number(),
});

export type UserOverviewI = z.infer<typeof UserOverviewSchema>;
