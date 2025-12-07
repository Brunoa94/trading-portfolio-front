import { z } from "zod";
import type {
  CreateTransactionSchema,
  TransactionSchema,
  TransactionWithVariationSchema,
} from "@/schemas/transaction";

export type TransactionI = z.infer<typeof TransactionSchema>;
export type TransactionWithVariationI = z.infer<
  typeof TransactionWithVariationSchema
>;
export type CreateTransactionT = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransactionT = Partial<z.infer<typeof TransactionSchema>>;
