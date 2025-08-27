import { baseUrl } from "@/shared/network/config/baseUrl";
import postRequestWithResponse from "@/shared/network/methods/postRequestWithResponse";
import { createQueryString } from "@/shared/tools/createQueryString";

export type CreateUserParams = {
  photoUrlFile: File | undefined;
  firstName: string;
  lastName: string;
  company: string;
  mail: string;
  phone: string;
  isAdmin: number;
  login: string;
  password: string;
};

export default async function createUser(
  createUserParams: CreateUserParams
): Promise<boolean> {
  const params = createQueryString(createUserParams);
  const path = baseUrl + `/createUser?${params}`;

  const formData = new FormData();
  if (createUserParams.photoUrlFile) {
    formData.append("photo", createUserParams.photoUrlFile);
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
