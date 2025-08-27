import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import InfoBox from "./infoBox";
import { useIntl } from "react-intl";
import useCurrentLocale from "@/i18n/useCurrentLocale";

export default function InfoBoxes({ event }: { event: GameEvent }) {
  const { currentLocale } = useCurrentLocale();
  const intl = useIntl();
  return (
    <>
      <InfoBox
        header={intl.formatMessage({ id: "description" })}
        text={event.description[currentLocale]}
      ></InfoBox>
      <InfoBox
        header={intl.formatMessage({ id: "manager" })}
        text={event.manager}
      ></InfoBox>
      <InfoBox
        header={intl.formatMessage({ id: "developer" })}
        text={event.developer}
      ></InfoBox>
    </>
  );
}
