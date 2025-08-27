import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { User } from "@/entities/user/model/user";

export type Sale = {
  id: number;
  eventId: number;
  userId: number;
  time: number;
};
