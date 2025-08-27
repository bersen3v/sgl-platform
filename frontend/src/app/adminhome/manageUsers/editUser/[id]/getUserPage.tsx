"use client";
import useRequest from "@/shared/network/hooks/useRequest";
import EditUserPageView from "./editUserPageView";
import EditUserPage from "./page";
import { userApiManager } from "@/entities/user/api/userApiManager";
import { get } from "http";

export default function GetUserPage({ userId }: { userId: string }) {
  const [getUserRequest, reloadGetUserRequest] = useRequest(
    () =>
      userApiManager.getUserById({
        id: userId,
      }),
    []
  );

  return (
    <>
      {getUserRequest.isLoaded && !getUserRequest.isLoading ? (
        <EditUserPageView user={getUserRequest.data}></EditUserPageView>
      ) : (
        <></>
      )}
    </>
  );
}
