import type { AssetTypeT } from "./asset";

export type TransactionI = {
  id: string;
  description?: string;
  asset_type: AssetTypeT;
  amount: number;
  price_targeted: number;
  user_id: number;
  symbol: string;
};
