import { IUser } from "../../interfaces/users.inteface";
import { api } from "../api";

export interface IRegisterLoginResponse {
  user: IUser;
}

//Requisição que faz o cadastro do usuário

export async function apiRegisterUser(
  dataRegister: IUser
): Promise<IRegisterLoginResponse> {
  const { data } = await api.post<IRegisterLoginResponse>(
    "/register",
    dataRegister
  );

  return data;
}
