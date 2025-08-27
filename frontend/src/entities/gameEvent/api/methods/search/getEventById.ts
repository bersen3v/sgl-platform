import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { baseUrl } from "@/shared/network/config/baseUrl";
import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";

export default async function getEventById({
  eventId,
}: {
  eventId: number;
}): Promise<GameEvent> {
  const path = `${baseUrl}/getEventById?id=${eventId}`;
  const data = await fetchStringFromUrl(path);

  return data as GameEvent;
}
