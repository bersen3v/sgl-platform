import { baseUrl } from "@/shared/network/config/baseUrl";
import postRequestWithResponse from "@/shared/network/methods/postRequestWithResponse";
import { createQueryString } from "@/shared/tools/createQueryString";

export default async function removeEvent({
  id,
}: {
  id: number;
}): Promise<boolean> {
  const path = baseUrl + `/removeEvent?id=${id}`;

  await postRequestWithResponse(path, {});

  return true;
}
