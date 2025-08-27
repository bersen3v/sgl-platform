import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventCard from "@/entities/gameEvent/ui/eventCard";
import { MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { useIntl } from "react-intl";

export default function EventsScroll({
  isAdmin = false,
  fullWidth = false,
  events,
  onEventRemove = () => {},
}: {
  isAdmin?: boolean;
  fullWidth?: boolean;
  events: GameEvent[] | undefined;
  onEventRemove?: (eventId: number) => void;
}) {
  const intl = useIntl();
  return (
    <div
      style={{
        display: "flex",
        height: fullWidth ? 1000 : 100,
        width: "100%",
        flexWrap: "wrap",
        gap: MySpacing.s10,
      }}
    >
      {events != undefined && events.length != 0 ? (
        [...events].map((event, index) => (
          <EventCard
            onRemove={onEventRemove}
            isAdmin={isAdmin}
            fullWidth={fullWidth}
            event={event}
            key={index}
          ></EventCard>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3
            style={{ ...MyTypography.Helvetica19Medium, color: MyColors.bg3 }}
          >
            {intl.formatMessage({ id: "noData" })}
          </h3>
        </div>
      )}
    </div>
  );
}
