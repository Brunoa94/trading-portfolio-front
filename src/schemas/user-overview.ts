import z from "zod";

export const UserOverviewSchema = z.object({
  balance: z.number(),
  value_invested: z.number(),
  margin: z.number(),
});

export const TopPerformerSchema = z.object({
  symbol: z.string(),
  total_investment: z.number(),
  current_value: z.number(),
  profit_loss: z.number(),
  profit_loss_percentage: z.number(),
  avg_buy_price: z.number(),
  current_price: z.number(),
});
