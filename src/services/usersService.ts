import type { TransactionI } from "@/types/transaction";
import { GET } from "./apiClient";

export class UserService {
  static async getUserTransactions({
    user_id,
  }: {
    user_id: number;
  }): Promise<TransactionI[]> {
    try {
      const response = await GET<TransactionI[]>(
        `/users/${user_id}/transactions`
      );

      return response;
    } catch (e) {
      throw e;
    }
  }
}
