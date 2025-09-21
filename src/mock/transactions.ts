import type { TransactionI } from "@/types/transaction";

export const TRANSACTIONS: TransactionI[] = [
  {
    id: "txn-001",
    description: "Bitcoin purchase",
    asset: {
      symbol: "BTC",
      name: "Bitcoin",
      type: "crypto",
    },
    amount: 0.5,
    price_bought: 12.123,
  },
  {
    id: "txn-002",
    description: "Apple stock investment",
    asset: {
      symbol: "AAPL",
      name: "Apple Inc.",
      type: "stock",
    },
    amount: 25,
    price_bought: 1222.12,
  },
  {
    id: "txn-003",
    description: "Euro exchange",

    asset: {
      symbol: "ETH",
      name: "Ethereum",
      type: "crypto",
    },
    amount: 3.75,
    price_bought: 12123.1,
  },
  {
    id: "txn-004",
    description: "Gold futures contract",
    asset: {
      symbol: "XAU",
      name: "Gold",
      type: "commodity",
    },
    amount: 2,
    price_bought: 12.123,
  },
  {
    id: "txn-005",
    description: "Euro exchange",
    asset: {
      symbol: "EUR",
      name: "Euro",
      type: "currency",
    },
    amount: 1000,
    price_bought: 667.1,
  },
  {
    id: "txn-006",
    description: "Euro exchange",

    asset: {
      symbol: "TSLA",
      name: "Tesla Inc.",
      type: "stock",
    },
    amount: 15,
    price_bought: 564.12,
  },
  {
    id: "txn-007",
    description: "Solana token swap",
    asset: {
      symbol: "SOL",
      name: "Solana",
      type: "crypto",
    },
    amount: 50.25,
    price_bought: 0.12,
  },
  {
    id: "txn-008",
    description: "Microsoft shares",
    asset: {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      type: "stock",
    },
    amount: 10,
    price_bought: 12.123,
  },
  {
    id: "txn-009",
    description: "Euro exchange",

    asset: {
      symbol: "XAG",
      name: "Silver",
      type: "commodity",
    },
    amount: 100,
    price_bought: 9.123,
  },
  {
    id: "txn-010",
    description: "Japanese Yen conversion",
    asset: {
      symbol: "JPY",
      name: "Japanese Yen",
      type: "currency",
    },
    amount: 50000,
    price_bought: 2222.123,
  },
];
