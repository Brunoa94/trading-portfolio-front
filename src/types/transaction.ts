interface Asset {
  symbol: string;
  name: string;
  type: "crypto" | "stock" | "commodity" | "currency";
}

export interface TransactionI {
  id: string;
  description?: string;
  asset: Asset;
  amount: number;
  price_bought: number;
}
