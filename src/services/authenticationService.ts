import type { AuthenticateUserI, UserSessionI } from "@/types/auth";
import { POST } from "./apiClient";
import { UserSessionSchema } from "@/schemas/auth";
import z from "zod";

export class AuthenticationService {
  static async autheticateUser(body: FormData): Promise<UserSessionI> {
    try {
      const response = await POST<UserSessionI>("/auth/authenticate", body);

      return UserSessionSchema.parse(response);
    } catch (e) {
      if (e instanceof z.ZodError) {
        throw new Error("Invalid data received from server for Transactions");
      }
      throw e;
    }
  }
}
