export type Asset = "crypto" | "stock" | "commodity" | "currency";

export type TransactionI = {
  id: string;
  description?: string;
  asset: Asset;
  amount: number;
  price_bought: number;
};

export type CreateTransactionT = Omit<TransactionI, "id">;
