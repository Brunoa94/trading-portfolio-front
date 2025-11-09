import type { AssetT, AssetTypeT } from "@/types/asset";
import { GET } from "./apiClient";
import { AssetSchema } from "@/schemas/asset";
import z from "zod";

export class AssetsService {
  static async getAssets({
    assetType,
  }: {
    assetType: AssetTypeT;
  }): Promise<AssetT[]> {
    try {
      const response = await GET<AssetT[]>(
        `/assets/${assetType.toLocaleLowerCase()}`
      );

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
}
