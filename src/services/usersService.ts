import type { TransactionI } from "@/types/transaction";
import { GET } from "./apiClient";
import { UserOverviewSchema, type UserOverviewI } from "@/schemas/user";
import z from "zod";
import { PaginatedTransactions } from "@/schemas/transaction";

type PropsWithUserId = {
  user_id: number;
};

export class UserService {
  static async getUserTransactions({
    user_id,
  }: PropsWithUserId): Promise<TransactionI[]> {
    try {
      const response = await GET<TransactionI[]>(
        `/users/${user_id}/transactions`
      );

      return PaginatedTransactions.parse(response).items;
    } catch (e) {
      if (e instanceof z.ZodError) {
        console.log(e);
        throw new Error(
          "Invalid data received from server for User Transactions " + e
        );
      }

      throw e;
    }
  }

  static async getUserOverview({
    user_id,
  }: PropsWithUserId): Promise<UserOverviewI> {
    try {
      const response = await GET<UserOverviewI>(`/users/${user_id}/overview`);

      return UserOverviewSchema.parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error("Invalid data received from server for User Overview");
      }

      throw e;
    }
  }
}
