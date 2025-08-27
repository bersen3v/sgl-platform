"use client";
import { userApiManager } from "@/entities/user/api/userApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import { CSSProperties, Key } from "react";
import { AutoSizer } from "react-virtualized";
import { FixedSizeList as List } from "react-window";
import AllUsersScroll from "./components/allUsersScroll";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";

export default function ManageUsersPage() {
  const router = useRouter();

  const [getAllUsersRequest, reloadGetAllUsersRequest] = useRequest(
    userApiManager.getAllUsers,
    []
  );

  const [removeUserRequest, mutateRemoveUserRequest] = useMutateRequest(
    userApiManager.removeUser,
    {
      onSuccess: () => {
        reloadGetAllUsersRequest();
      },
    }
  );

  return (
    <div
      style={{
        display: "flex",
        padding: MySpacing.s25,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: "column",
        gap: MySpacing.s25,
        height: "100%",
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
          <h1 style={{ ...MyTypography.Helvetica22Normal }}>Пользователи</h1>
        </div>
        <div style={{ flex: 1, flexGrow: 1 }}></div>
        <div style={{ flexGrow: 0 }}>
          <CustomButton
            onClick={() => {
              router.push("/adminhome/manageUsers/createUser");
            }}
            label={"Создать пользователя"}
          ></CustomButton>
        </div>
      </div>

      <div style={{ display: "flex", height: "100%" }}>
        {getAllUsersRequest.isLoaded && !getAllUsersRequest.isLoading ? (
          <AllUsersScroll
            onRemove={(userId: string) => {
              mutateRemoveUserRequest({ id: Number(userId) });
            }}
            users={getAllUsersRequest.data}
          ></AllUsersScroll>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
