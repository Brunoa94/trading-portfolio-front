export type Asset = "CRYPTO" | "STOCK";

export type TransactionI = {
  id: string;
  description?: string;
  asset_type: Asset;
  amount: number;
  price_bought: number;
};

export type CreateTransactionT = Omit<TransactionI, "id">;
