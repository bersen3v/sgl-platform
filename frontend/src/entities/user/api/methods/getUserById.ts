import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";
import { User } from "../../model/user";
import { baseUrl } from "@/shared/network/config/baseUrl";

export default async function getUserById({
  id,
}: {
  id: string;
}): Promise<User> {
  const path = baseUrl + `/getUserById?id=${id}`;
  const data = await fetchStringFromUrl(path);

  return data as User;
}
