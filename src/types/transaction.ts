export type Asset = "CRYPTO" | "STOCK";

export type TransactionI = {
  id: string;
  description?: string;
  asset_type: Asset;
  amount: number;
  price_bought: number;
  user_id: number;
};
