import type { UserOverviewSchema } from "@/schemas/user";
import z from "zod";

export type UserOverviewT = z.infer<typeof UserOverviewSchema>;
