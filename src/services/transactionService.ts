import type { CreateTransactionT, TransactionI } from "@/types/transaction";
import { DELETE, GET, PATCH, POST } from "./apiClient";

export class TransactionService {
  static async getTransactions() {
    try {
      const response = await GET<TransactionI[]>("/tradings");

      return response;
    } catch (e) {
      throw new Error(`Error getting transactions: ` + e);
    }
  }

  static async createTransaction(body: CreateTransactionT) {
    try {
      const response = await POST<TransactionI>("/tradings", body);
      return response;
    } catch (e) {
      throw new Error(`Error creating transaction: ` + e);
    }
  }

  static async updateTransaction(body: CreateTransactionT) {
    try {
      const response = await PATCH<TransactionI>("/tradings", body);

      return response;
    } catch (e) {
      throw new Error(`Error updating transaction: ` + e);
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
