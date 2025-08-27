import { use } from "react";
import UserInfo from "../components/userInfo/userInfo";
import { User } from "@/entities/user/model/user";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import UserEvents from "../components/userInfo/userEvents";
import { MySpacing } from "@/shared/styles";
import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import useRequest from "@/shared/network/hooks/useRequest";
import { userApiManager } from "@/entities/user/api/userApiManager";
import CustomFooter from "@/shared/widgets/customFooter/customFooter";

export default function UserPageDesktopView({ user }: { user: User }) {
  const router = useRouter();
  const meId = localStorage.getItem("userKey");
  const [meInfoRequest, reloadMeInfoRequest] = useRequest(() => {
    return userApiManager.getUserById({ id: meId ? meId : "-1" });
  }, []);

  return (
    <div
      style={{ display: "flex", gap: MySpacing.s15, flexDirection: "column" }}
    >
      <div style={{ display: "flex", gap: MySpacing.s10 }}>
        <CustomBackButton></CustomBackButton>
        {meInfoRequest.isLoaded &&
          !meInfoRequest.isLoading &&
          meInfoRequest.data.isAdmin === 1 && (
            <CustomButton
              onClick={() => router.push("/adminhome")}
              label={"Админка"}
            ></CustomButton>
          )}
      </div>
      <UserInfo user={user}></UserInfo>
      <UserEvents userId={user.id}></UserEvents>
      {/* <CustomFooter></CustomFooter> */}
    </div>
  );
}
