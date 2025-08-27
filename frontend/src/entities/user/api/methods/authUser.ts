import { baseUrl } from "@/shared/network/config/baseUrl";
import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";
import { User } from "../../model/user";

export type AuthUserProps = {
  login: string;
  password: string;
};

export type AuthUserAnswer = string | undefined;

export default async function authUser({
  login,
  password,
}: AuthUserProps): Promise<AuthUserAnswer> {
  const path = baseUrl + `/authUser?login=${login}&password=${password}`;
  const data = await fetchStringFromUrl(path);
  const user = data as User | undefined;
  return user ? user.id : undefined;
}
