import { baseUrl } from "@/shared/network/config/baseUrl";
import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";
import postRequestWithResponse from "@/shared/network/methods/postRequestWithResponse";
import putRequestWithResponse from "@/shared/network/methods/putRequestWithResponce";
import { createQueryString } from "@/shared/tools/createQueryString";

export type EditEventParams = {
  id: number;
  photoUrlFile: File | undefined;
  previewPhoto: string | undefined;
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

export default async function editEvent(
  editEventParams: EditEventParams
): Promise<boolean> {
  const params = createQueryString(editEventParams);
  const path = baseUrl + `/updateEvent?${params}`;

  const formData = new FormData();
  if (editEventParams.photoUrlFile) {
    formData.append("photo", editEventParams.photoUrlFile);
  }

  await postRequestWithResponse(path, formData);

  return true;
}
