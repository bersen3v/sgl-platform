import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";
import { Sale } from "../../model/sale";
import { baseUrl } from "@/shared/network/config/baseUrl";

export default async function getAllSales(): Promise<Sale[]> {
  const path = baseUrl + `/getAllSales`;
  const data = await fetchStringFromUrl(path);
  const answer = data as Sale[];
  return answer;
}
