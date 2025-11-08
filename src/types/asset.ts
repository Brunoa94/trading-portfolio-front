export type AssetTypeT = "CRYPTO" | "STOCK";

export type AssetT = {
  type: string;
  icon: string;
  name: string;
  symbol: string;
  exchange: string;
};
