import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { baseUrl } from "@/shared/network/config/baseUrl";
import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";

export default async function getUserEvents({
  id,
}: {
  id: string;
}): Promise<GameEvent[]> {
  const path = baseUrl + `/getUserEvents?userId=${id}`;
  const data = await fetchStringFromUrl(path);

  const answer = data as GameEvent[];

  return answer;
}
