import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventSite from "./eventSite";
import GetOfferButton from "./getOfferButton";
import TranslationLink from "./translationLink";

export default function EventActions({ event }: { event: GameEvent }) {
  return (
    <>
      <GetOfferButton event={event}></GetOfferButton>
      <EventSite event={event}></EventSite>
      <TranslationLink event={event}></TranslationLink>
    </>
  );
}
