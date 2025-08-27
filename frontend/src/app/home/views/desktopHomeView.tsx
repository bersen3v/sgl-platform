import { MySpacing } from "@/shared/styles";
import MainHomeText from "../components/mainHomeText";
import HomeSearchButton from "../components/homeSearchButton";
import Players from "../components/players";
import MainHomePhoto from "../components/mainHomePhoto";
import Partners from "../components/partners";

export default function DesktopHomeView() {
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
      <div
        style={{ display: "flex", gap: MySpacing.s15, flexDirection: "column" }}
      >
        <div style={{ width: "100%", display: "flex", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              gap: MySpacing.s25,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: MySpacing.s10,
                flexDirection: "column",
              }}
            >
              <MainHomeText messageId="mainTitle"></MainHomeText>
              <HomeSearchButton
                messageId={"bookingEvents"}
                path={"/search"}
              ></HomeSearchButton>
            </div>

            <div
              style={{
                display: "flex",
                gap: MySpacing.s10,
                flexDirection: "column",
              }}
            >
              <MainHomeText messageId="secondTitle"></MainHomeText>
              <HomeSearchButton
                messageId="secondMainButton"
                path={"https://sgl.one/"}
              ></HomeSearchButton>
            </div>
          </div>

          <MainHomePhoto></MainHomePhoto>
        </div>
      </div>
      <Players></Players>
      <Partners></Partners>
      {/* <CustomFooter></CustomFooter> */}
    </div>
  );
}
