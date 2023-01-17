import { api } from "../api";

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export async function apiLoginUser(
  dataLogin: ILoginUser
): Promise<ILoginResponse> {
  const { data } = await api.post<ILoginResponse>("/login", dataLogin);

  return data;
}
