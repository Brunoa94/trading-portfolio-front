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
  asset_icon: z.string(),
});

export const GrowthPortfolioSchema = z.object({
  timestamp: z.string().optional(),
  portfolio_value: z.number(),
  absolute_diff: z.number(),
  percentage_diff: z.number(),
});

export const UserGrowthDataSchema = z.object({
  current_portfolio_value: z.number(),
  growth_24h: GrowthPortfolioSchema,
  growth_week: GrowthPortfolioSchema,
  growth_month: GrowthPortfolioSchema,
  growth_year: GrowthPortfolioSchema,
});
