import z from "zod";
import { AssetTypeSchema } from "./asset";

export const TransactionSchema = z.object({
  id: z.number(),
  title: z.string().optional(),
  asset_type: AssetTypeSchema,
  amount: z.number().positive(),
  price_targeted: z.number().positive(),
  user_id: z.number().int().positive(),
  symbol: z.string(),
});

export const CreateTransactionSchema = TransactionSchema.omit({
  id: true,
});

export const UpdateTransactionSchema = TransactionSchema.partial();

export const PaginatedTransactions = z.object({
  items: z.array(TransactionSchema),
  totalCount: z.number(),
});
