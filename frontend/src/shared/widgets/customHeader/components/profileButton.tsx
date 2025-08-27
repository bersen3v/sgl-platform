import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import ProfileIcon from "../../../../../public/icons/profile.svg";
import { useRouter } from "next/navigation";

export default function ProfileButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        const userKey = localStorage.getItem("userKey");
        if (userKey) {
          router.push(`/user/${userKey}`);
          return;
        }
        router.push("/auth");
      }}
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: MyColors.bg2,
        padding: MySpacing.s10,
        borderRadius: MyBordersRadius.r10,
      }}
    >
      <ProfileIcon></ProfileIcon>
    </div>
  );
}
