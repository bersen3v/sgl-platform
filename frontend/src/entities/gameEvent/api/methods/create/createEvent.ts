import { baseUrl } from "@/shared/network/config/baseUrl";
import postRequestWithResponse from "@/shared/network/methods/postRequestWithResponse";
import { createQueryString } from "@/shared/tools/createQueryString";

export type CreateEventParams = {
  photoUrlFile: File | undefined;
  startTime: number;
  endTime: number;
  nameRu: string;
  nameEn: string;
  nameKz: string;
  descriptionRu: string;
  descriptionEn: string;
  descriptionKz: string;
  manager: string;
  developer: string;
  placeRu: string;
  placeEn: string;
  placeKz: string;
  discipline: string;
  prize: number;
};

export default async function createEvent(
  createEventParams: CreateEventParams
): Promise<boolean> {
  const params = createQueryString(createEventParams);
  const path = baseUrl + `/createEvent?${params}`;

  const formData = new FormData();
  if (createEventParams.photoUrlFile) {
    formData.append("photo", createEventParams.photoUrlFile);
  }

  const answer = await postRequestWithResponse(path, formData);

  const data = {
    result: true,
  };

  return (
    data as {
      result: boolean;
    }
  ).result;
}
