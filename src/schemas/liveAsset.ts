import z from "zod";

export const LiveAssetSchema = z.object({
  symbol: z.string(),
  current_price: z.number(),
  change_24h: z.number(),
  percentage_change_24h: z.number(),
  icon: z.string(),
});

export const LiveAssetsResponseSchema = z.object({
  live_assets: z.array(LiveAssetSchema),
  count: z.number(),
  timestamp: z.string(),
});
