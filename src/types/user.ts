import type { UserDetailsSchema, UserOverviewSchema } from "@/schemas/user";
import type z from "zod";

export type UserOverviewI = z.infer<typeof UserOverviewSchema>;
export type UserDetailsI = z.infer<typeof UserDetailsSchema>;
