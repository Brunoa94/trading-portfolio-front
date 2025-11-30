import z from "zod";

export const AssetTypeSchema = z.enum(["CRYPTO", "STOCK"]);

export const AssetSchema = z.object({
  type: z.string(),
  icon: z.string(),
  name: z.string(),
  symbol: z.string(),
  exchange: z.string(),
});

export const AssetPriceSchema = z.object({
  symbol: z.string(),
  current_price: z.number(),
});
