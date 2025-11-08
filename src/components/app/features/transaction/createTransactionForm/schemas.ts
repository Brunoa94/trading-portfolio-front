import z from "zod";

export const CreateTransactionSchema = z.object({
  title: z.string().optional(),
  amount: z.number(),
  asset_type: z.string(),
  price_targeted: z.number(),
  user_id: z.number(),
  symbol: z.string(),
});

export type CreateTransactionT = z.infer<typeof CreateTransactionSchema>;
