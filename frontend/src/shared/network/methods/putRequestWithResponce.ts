import axios, { AxiosError } from "axios";

export default async function putRequestWithResponse(
  path: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any
): Promise<unknown> {
  try {
    const response = await axios.put(path, body, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error);
    return undefined;
  }
}
