import { baseUrl } from "@/shared/network/config/baseUrl";
import postRequestWithResponse from "@/shared/network/methods/postRequestWithResponse";
import { createQueryString } from "@/shared/tools/createQueryString";

export type CreateSaleParams = {
  userId: number;
  eventId: number;
  time: number;
};

export default async function createSale(
  createSaleParams: CreateSaleParams
): Promise<boolean> {
  const params = createQueryString(createSaleParams);
  const path = baseUrl + `/addEventToUser?${params}`;

  await postRequestWithResponse(path, {});

  const data = {
    result: true,
  };

  return (
    data as {
      result: boolean;
    }
  ).result;
}
