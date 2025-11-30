import type { TopPerformerT, UserOverviewT } from "@/types/userOverview";
import { GET } from "./apiClient";
import { UserOverviewSchema } from "@/schemas/user";
import z from "zod";
import { TopPerformerSchema } from "@/schemas/user-overview";

export class UserOverviewService {
  static async getUserOverview({
    user_id,
  }: {
    user_id: number;
  }): Promise<UserOverviewT> {
    try {
      const response = await GET<UserOverviewT>(`/users/${user_id}/overview`);

      return UserOverviewSchema.parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error("Invalid data received from server for User overview");
      }

      throw e;
    }
  }

  static async getUserTopPerformers({
    user_id,
  }: {
    user_id: number;
  }): Promise<TopPerformerT[]> {
    try {
      const response = await GET<TopPerformerT[]>(
        `/tradings/${user_id}/top_performers`
      );

      return z.array(TopPerformerSchema).parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error("Invalid data received from server for Top performers");
      }

      throw e;
    }
  }
}
