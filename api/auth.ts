import { User } from "../common/entities/user";
import { ApiInstnace } from "../core/clients";
import { ApiResponse } from "./type";

export interface AuthProps {
  email: User["email"];
  password: User["password"];
}

export const auth = async (data: AuthProps) =>
  await ApiInstnace.post<ApiResponse<User>>("/auth", { ...data });
