import z from "zod";
import { AssetTypeSchema } from "./asset";
import { formatDate } from "../utils/formatDate";

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

export const TransactionWithVariationSchema = TransactionSchema.extend({
  variation: z.object({
    difference_value: z.number(),
    difference_percentage: z.number()
  }),
  created_at: z.string()
}).transform((data) => ({
  ...data,
  created_at: formatDate(data.created_at)
}));

export const PaginatedTransactions = z.object({
  items: z.array(TransactionSchema),
  totalCount: z.number(),
});
