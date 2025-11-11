import { z } from "zod";
import type {
  CreateTransactionSchema,
  TransactionSchema,
} from "@/schemas/transaction";

export type TransactionI = z.infer<typeof TransactionSchema>;
export type CreateTransactionT = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransactionT = Partial<z.infer<typeof TransactionSchema>>;
