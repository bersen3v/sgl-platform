import { baseUrl } from "@/shared/network/config/baseUrl";
import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";
import postRequestWithResponse from "@/shared/network/methods/postRequestWithResponse";
import putRequestWithResponse from "@/shared/network/methods/putRequestWithResponce";
import { createQueryString } from "@/shared/tools/createQueryString";

export type UpdateUserParams = {
  id: number;
  photoUrlFile: File | undefined;
  previewPhoto: string | undefined;
  firstName: string;
  lastName: string;
  company: string;
  mail: string;
  phone: string;
  isAdmin: number;
  login: string;
  password: string;
};

export default async function updateUser(
  updateUserParams: UpdateUserParams
): Promise<boolean> {
  const params = createQueryString(updateUserParams);
  const path = baseUrl + `/updateUser?${params}`;

  const formData = new FormData();
  if (updateUserParams.photoUrlFile) {
    formData.append("photo", updateUserParams.photoUrlFile);
  }

  await postRequestWithResponse(path, formData);

  return true;
}
