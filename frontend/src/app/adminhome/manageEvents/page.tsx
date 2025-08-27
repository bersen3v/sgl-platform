"use client";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import useRequest from "@/shared/network/hooks/useRequest";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import { CustomButton } from "@/shared/widgets/customButton";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import { useRouter } from "next/navigation";

export default function ManageEventsPage() {
  const router = useRouter();
  const [eventsRequest, reloadEventsRequest] = useRequest(
    gameEventApiManager.getAllEvents,
    []
  );

  const [removeEventRequest, mutateRemoveEventRequest] = useMutateRequest(
    gameEventApiManager.removeEvent,
    {
      onSuccess: () => {
        reloadEventsRequest();
      },
      onFail: () => {},
    }
  );

  return (
    <div
      style={{
        display: "flex",
        padding: MySpacing.s25,
        paddingTop: 0,
        flexDirection: "column",
        gap: MySpacing.s25,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: MySpacing.s10,
          }}
        >
          <CustomBackButton></CustomBackButton>
          <h1 style={{ ...MyTypography.Helvetica22Normal }}>Мероприятия</h1>
        </div>
        <div style={{ flex: 1, flexGrow: 1 }}></div>
        <div style={{ flexGrow: 0 }}>
          <CustomButton
            onClick={() => {
              router.push("/adminhome/manageEvents/createEvents");
            }}
            label={"Создать мероприятие"}
          ></CustomButton>
        </div>
      </div>

      {eventsRequest.isLoaded && !eventsRequest.isLoading ? (
        <EventsScroll
          onEventRemove={(eventId) => {
            mutateRemoveEventRequest({ id: eventId });
          }}
          isAdmin
          events={eventsRequest.data}
        ></EventsScroll>
      ) : (
        <div></div>
      )}
    </div>
  );
}
