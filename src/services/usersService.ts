import type {
  TransactionI,
  TransactionWithVariationI,
} from "@/types/transaction";
import { GET } from "./apiClient";
import { UserOverviewSchema, type UserOverviewI } from "@/schemas/user";
import z from "zod";
import {
  PaginatedTransactions,
  PaginatedTransactionsWithVariation,
  TransactionSchema,
  TransactionWithVariationSchema,
} from "@/schemas/transaction";
import type { ItemsWithPaginator } from "@/types/paginator";

type PropsWithUserId = {
  user_id: number;
};

type GetUserTransactionsProps = {
  user_id: number;
  page?: number;
  limit?: number;
};

export class UserService {
  static async getUserTransactionsWithVariation({
    user_id,
    page = 1,
    limit = 10,
  }: GetUserTransactionsProps): Promise<
    ItemsWithPaginator<TransactionWithVariationI>
  > {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });

      const response = await GET<ItemsWithPaginator<TransactionWithVariationI>>(
        `/users/${user_id}/transactions/variation`
      );

      return PaginatedTransactionsWithVariation.parse(response);
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

  static async getUserTransactions({
    user_id,
    page = 1,
    limit = 10,
  }: GetUserTransactionsProps): Promise<ItemsWithPaginator<TransactionI>> {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });

      const response = await GET<ItemsWithPaginator<TransactionI>>(
        `/users/${user_id}/transactions`
      );

      return PaginatedTransactions.parse(response);
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
