import type { AssetT, AssetTypeT } from "@/types/asset";
import { GET } from "./apiClient";

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

      return response;
    } catch (e) {
      throw new Error(`Error getting assets: ` + e);
    }
  }
}
