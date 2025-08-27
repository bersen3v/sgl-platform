import { MySpacing } from "@/shared/styles";
import MainHomeText from "../components/mainHomeText";
import HomeSearchButton from "../components/homeSearchButton";
import Players from "../components/players";
import CustomFooter from "@/shared/widgets/customFooter/customFooter";
import MainHomePhoto from "../components/mainHomePhoto";
import Partners from "../components/partners";

export default function MobileHomeView() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: MySpacing.s25,
        flexDirection: "column",
        gap: MySpacing.s25,
      }}
    >
      <MainHomePhoto isMobile></MainHomePhoto>
      <div
        style={{ display: "flex", gap: MySpacing.s15, flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            gap: MySpacing.s15,
            flexDirection: "column",
          }}
        >
          <MainHomeText isMobile messageId={"mainTitle"}></MainHomeText>
          <HomeSearchButton
            isMobile
            messageId={"bookingEvents"}
            path={"/search"}
          ></HomeSearchButton>
        </div>
        <div
          style={{
            display: "flex",
            gap: MySpacing.s15,
            flexDirection: "column",
          }}
        >
          <MainHomeText isMobile messageId={"secondTitle"}></MainHomeText>
          <HomeSearchButton
            isMobile
            messageId={"secondMainButton"}
            path={"https://sgl.one/"}
          ></HomeSearchButton>
        </div>
      </div>
      <Players isMobile></Players>
      <Partners></Partners>
      {/* <CustomFooter></CustomFooter> */}
    </div>
  );
}
