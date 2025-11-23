import type { UserOverviewSchema } from "@/schemas/user";
import type { TopPerformerSchema } from "@/schemas/user-overview";
import z from "zod";

export type UserOverviewT = z.infer<typeof UserOverviewSchema>;
export type TopPerformerT = z.infer<typeof TopPerformerSchema>;
