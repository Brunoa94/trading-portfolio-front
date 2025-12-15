import { z } from "zod";
import { LiveAssetSchema, LiveAssetsResponseSchema } from "@/schemas/liveAsset";

export type LiveAsset = z.infer<typeof LiveAssetSchema>;
export type LiveAssetsResponse = z.infer<typeof LiveAssetsResponseSchema>;