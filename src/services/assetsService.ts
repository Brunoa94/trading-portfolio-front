import type { AssetPriceT, AssetT, AssetTypeT } from "@/types/asset";
import { GET } from "./apiClient";
import { AssetPriceSchema, AssetSchema } from "@/schemas/asset";
import z from "zod";

export class AssetsService {
  static async getAssets(): Promise<AssetT[]> {
    try {
      const response = await GET<AssetT[]>(`/assets/`);

      return z.array(AssetSchema).parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error(
          "Invalid data received from server for Update Transaction"
        );
      }

      throw e;
    }
  }

  static async getAssetPrice(symbol: string): Promise<AssetPriceT> {
    try {
      const response = await GET<AssetPriceT>(`/assets/${symbol}/price/`);

      return AssetPriceSchema.parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error(
          "Invalid data received from server for Update Transaction"
        );
      }

      throw e;
    }
  }
}
