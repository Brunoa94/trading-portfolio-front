import z from "zod";

export const UserOverviewSchema = z.object({
  balance: z.number(),
  value_invested: z.number(),
  margin: z.number(),
});

export const TopPerformerSchema = z.object({
  ranking: z.enum(["gold", "silver", "bronze"]),
  symbol: z.string(),
  quantity: z.number(),
  value_invested: z.number(),
  marginPercentage: z.number(),
  marginNumber: z.number(),
});
