import type { UserOverviewSchema } from "@/schemas/user";
import type {
  GrowthPortfolioSchema,
  TopPerformerSchema,
  UserGrowthDataSchema,
} from "@/schemas/user-overview";
import z from "zod";

export type UserOverviewT = z.infer<typeof UserOverviewSchema>;
export type TopPerformerT = z.infer<typeof TopPerformerSchema>;
export type GrowthVariationT = z.infer<typeof GrowthPortfolioSchema>;
export type UserGrowthDataT = z.infer<typeof UserGrowthDataSchema>;

export type GrowthPeriodKeysT = keyof Omit<
  UserGrowthDataT,
  "current_portfolio_value"
>;

export type GrowVariationKeysT = keyof Omit<GrowthVariationT, "timestamp">;
