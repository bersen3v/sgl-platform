import { CreateEventParams } from "@/entities/gameEvent/api/methods/create/createEvent";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createQueryString = <T extends Record<string, any>>(
  params: T
): string => {
  const queryArray = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          (value ?? "").toString()
        )}`
    );

  return queryArray.join("&");
};
