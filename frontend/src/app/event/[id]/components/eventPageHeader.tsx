import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import useCurrentLocale from "@/i18n/useCurrentLocale";
import { baseUrl } from "@/shared/network/config/baseUrl";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { useIntl } from "react-intl";

export default function EventPageHeader({
  event,
  direction = "row",
}: {
  event: GameEvent;
  direction?: "row" | "column";
}) {
  const { currentLocale } = useCurrentLocale();
  return (
    <div style={{ display: "flex", flexDirection: direction }}>
      <img
        style={{
          width: direction == "column" ? "100%" : "40%",
          borderRadius: MyBordersRadius.r20,
          objectFit: "cover",
        }}
        src={baseUrl + `/getPhoto?id=${event.previewPhoto}`}
        alt={"фото эвента"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: MySpacing.s15,
          gap: MySpacing.s10,
        }}
      >
        <h1 style={{ ...MyTypography.Helvetica22Normal }}>
          {event.name[currentLocale]}
        </h1>
        <div>
          <h3 style={{ ...MyTypography.Helvetica16Normal }}>
            {event.discipline}
          </h3>
          <h3 style={{ ...MyTypography.Helvetica16Normal }}>
            {event.place[currentLocale]}
          </h3>
        </div>
        <h3
          style={{ ...MyTypography.Helvetica19Medium, color: MyColors.green }}
        >
          {event.prize} $
        </h3>
      </div>
    </div>
  );
}
