import { z } from "zod";
import { LiveAssetSchema, LiveAssetsResponseSchema } from "@/schemas/liveAsset";

export type LiveAssetT = z.infer<typeof LiveAssetSchema>;
export type LiveAssetsResponseT = z.infer<typeof LiveAssetsResponseSchema>;
