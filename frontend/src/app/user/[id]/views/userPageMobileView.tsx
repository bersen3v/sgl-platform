import { User } from "@/entities/user/model/user";
import UserInfo from "../components/userInfo/userInfo";
import UserEvents from "../components/userInfo/userEvents";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import { MySpacing } from "@/shared/styles";
import CustomFooter from "@/shared/widgets/customFooter/customFooter";

export default function UserPageMobileView({ user }: { user: User }) {
  return (
    <div
      style={{ display: "flex", gap: MySpacing.s10, flexDirection: "column" }}
    >
      <CustomBackButton></CustomBackButton>
      <UserInfo user={user} isMobile></UserInfo>
      <UserEvents userId={user.id} isMobile></UserEvents>
      {/* <CustomFooter></CustomFooter> */}
    </div>
  );
}
