import type { UserOverviewSchema } from "@/schemas/user";
import type {
  GrowthPortfolioSchema,
  PodiumEntrySchema,
  PodiumsDataSchema,
  TopPerformerSchema,
  UserGrowthDataSchema,
} from "@/schemas/user-overview";
import z from "zod";

export type UserOverviewT = z.infer<typeof UserOverviewSchema>;
export type TopPerformerT = z.infer<typeof TopPerformerSchema>;
export type GrowthVariationT = z.infer<typeof GrowthPortfolioSchema>;
export type UserGrowthDataT = z.infer<typeof UserGrowthDataSchema>;
export type PodiumsDataT = z.infer<typeof PodiumsDataSchema>;
export type PodiumEntryT = z.infer<typeof PodiumEntrySchema>;

// ### TYPES KEYS ###
export type GrowthPeriodKeysT = keyof Omit<
  UserGrowthDataT,
  "current_portfolio_value"
>;

export type GrowVariationKeysT = keyof Omit<GrowthVariationT, "timestamp">;
export type PodiumKeysT = keyof PodiumsDataT;
