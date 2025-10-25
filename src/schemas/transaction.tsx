import z from "zod";

export const CreateTransactionSchema = z.object({
  description: z.string().optional(),
  amount: z.number(),
  asset_type: z.string(),
  price_bought: z.number(),
});

export type CreateTransactionT = z.infer<typeof CreateTransactionSchema>;
