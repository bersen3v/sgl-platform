import { baseUrl } from "@/shared/network/config/baseUrl";
import { User } from "../../model/user";
import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";

export default async function getAllUsers(): Promise<User[]> {
  const path = baseUrl + "/getAllUsers";

  const data = await fetchStringFromUrl(path);

  return data as User[];
}
