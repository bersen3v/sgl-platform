import { MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { GameEvent } from "../../model/gameEvent";
import useCurrentLocale from "@/i18n/useCurrentLocale";
import timestamp2dm from "@/shared/tools/timestamp2dm";
import timestamp2year from "@/shared/tools/timestamp2year";

export default function EventCardText({ event }: { event: GameEvent }) {
  const { currentLocale } = useCurrentLocale();
  return (
    <div style={{ padding: MySpacing.s5 }}>
      <h2 style={{ ...MyTypography.Helvetica19Medium, color: MyColors.white }}>
        {event.name[currentLocale]}
      </h2>

      <div
        style={{
          paddingTop: MySpacing.s10,
          paddingBottom: MySpacing.s10,
          gap: MySpacing.s5,
        }}
      >
        <h3 style={{ ...MyTypography.Helvetica15Thin, color: MyColors.white }}>
          {event.discipline}
        </h3>

        <h3 style={{ ...MyTypography.Helvetica15Thin, color: MyColors.white }}>
          {timestamp2dm({ timestamp: event.startTime })} -{" "}
          {timestamp2dm({ timestamp: event.endTime })} (
          {timestamp2year({ timestamp: event.endTime })})
        </h3>
      </div>

      <h3 style={{ ...MyTypography.Helvetica19Medium, color: MyColors.white }}>
        {event.prize} $
      </h3>
    </div>
  );
}
