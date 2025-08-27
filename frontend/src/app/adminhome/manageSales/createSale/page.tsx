"use client";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { userApiManager } from "@/entities/user/api/userApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import CustomSelect from "@/shared/widgets/customSelect/customSelect";
import useCustomSelect from "@/shared/widgets/customSelect/hooks/useCustomSelect";
import CreateSalePageView from "./createSalePageView";

export default function CreateSalePage() {
  const [getUsersRequest, reloadGetUsersRequest] = useRequest(
    userApiManager.getAllUsers,
    []
  );

  const [getEventsRequest, reloadGetEventsRequest] = useRequest(
    gameEventApiManager.getAllEvents,
    []
  );

  return (
    <>
      {getUsersRequest.isLoaded &&
        !getUsersRequest.isLoading &&
        getEventsRequest.isLoaded &&
        !getEventsRequest.isLoading && (
          <CreateSalePageView
            users={getUsersRequest.data}
            events={getEventsRequest.data}
          ></CreateSalePageView>
        )}
    </>
  );
}
