"use client";

import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import EditEventsPageView from "./editEventsPageView";

export default function GetEventView({ eventId }: { eventId: number }) {
  const [getEventRequest, reloadGetEventRequest] = useRequest(
    () =>
      gameEventApiManager.getEventById({
        eventId: eventId,
      }),
    []
  );

  return (
    <>
      {!getEventRequest.isLoading && getEventRequest.isLoaded ? (
        <EditEventsPageView event={getEventRequest.data}></EditEventsPageView>
      ) : (
        <div></div>
      )}
    </>
  );
}
