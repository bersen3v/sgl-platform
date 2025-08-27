import { MySpacing } from "@/shared/styles";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventActions from "../components/eventActions";
import InfoBoxes from "../components/infoBoxes";
import EventPageHeader from "../components/eventPageHeader";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";

export default function EventPageDesktopView({ event }: { event: GameEvent }) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: MySpacing.s25,
        paddingTop: 0,
        gap: MySpacing.s10,
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <CustomBackButton></CustomBackButton>
      <EventPageHeader event={event}></EventPageHeader>
      <div style={{ display: "flex", gap: MySpacing.s10 }}>
        <div
          style={{
            display: "flex",
            width: "75%",
            flexDirection: "column",
            gap: MySpacing.s10,
          }}
        >
          <InfoBoxes event={event}></InfoBoxes>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            gap: MySpacing.s10,
          }}
        >
          <EventActions event={event}></EventActions>
        </div>
      </div>
    </div>
  );
}
