import { baseUrl } from "@/shared/network/config/baseUrl";
import postRequestWithResponse from "@/shared/network/methods/postRequestWithResponse";
import { createQueryString } from "@/shared/tools/createQueryString";

export type RemoveSaleParams = {
  userId: number;
  eventId: number;
};

export default async function removeSale(
  removeSaleParams: RemoveSaleParams
): Promise<boolean> {
  const params = createQueryString(removeSaleParams);
  const path = baseUrl + `/removeEventFromUser?${params}`;

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
