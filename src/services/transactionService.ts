import type {
  CreateTransactionT,
  TransactionI,
  UpdateTransactionT,
} from "@/types/transaction";
import { DELETE, GET, PATCH, POST, PUT } from "./apiClient";
import z from "zod";
import { TransactionSchema } from "@/schemas/transaction";

export class TransactionService {
  static async getTransactions(): Promise<TransactionI[]> {
    try {
      const response = await GET<TransactionI[]>("/tradings");

      return z.array(TransactionSchema).parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error("Invalid data received from server for Transactions");
      }

      throw e;
    }
  }

  static async createTransaction(
    body: CreateTransactionT
  ): Promise<TransactionI> {
    try {
      const response = await POST<TransactionI>("/tradings", body);

      return TransactionSchema.parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error(
          "Invalid data received from server for Create Transaction"
        );
      }

      throw e;
    }
  }

  static async updateTransaction(
    body: UpdateTransactionT
  ): Promise<TransactionI> {
    try {
      const response = await PUT<TransactionI>(`/tradings/${body.id}`, body);

      return TransactionSchema.parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error(
          "Invalid data received from server for Update Transaction"
        );
      }

      throw e;
    }
  }

  static async deleteTransaction(id: string) {
    try {
      const response = await DELETE<unknown>(`/tradings/${id}`);

      return response;
    } catch (e) {
      throw new Error(`Error delete transaction: ` + e);
    }
  }
}
