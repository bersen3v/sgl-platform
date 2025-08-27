import { MySpacing } from "@/shared/styles";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventActions from "../components/eventActions";
import InfoBoxes from "../components/infoBoxes";
import EventPageHeader from "../components/eventPageHeader";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";

export default function EventPageMobileView({ event }: { event: GameEvent }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: MySpacing.s20,
        paddingTop: 0,
        gap: MySpacing.s10,
      }}
    >
      <CustomBackButton></CustomBackButton>
      <EventPageHeader event={event} direction="column"></EventPageHeader>
      <EventActions event={event}></EventActions>
      <InfoBoxes event={event}></InfoBoxes>
    </div>
  );
}
