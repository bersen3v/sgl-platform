import { userApiManager } from "@/entities/user/api/userApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import { FormattedMessage, useIntl } from "react-intl";

export default function UserEvents({
  userId,
  isMobile = false,
}: {
  userId: string;
  isMobile?: boolean;
}) {
  const intl = useIntl();
  const [userEventsRequest, reloadUserEventsRequest] = useRequest(
    () => userApiManager.getUserEvents({ id: userId }),
    []
  );

  return (
    <div>
      <div style={{ padding: MySpacing.s15, paddingTop: MySpacing.s25 }}>
        <h3 style={{ ...MyTypography.Helvetica22Normal }}>
          {intl.formatMessage({ id: "my_events" })}
        </h3>
      </div>

      {userEventsRequest.isLoaded && !userEventsRequest.isLoading ? (
        <EventsScroll
          events={userEventsRequest.data}
          fullWidth={isMobile}
        ></EventsScroll>
      ) : (
        <div></div>
      )}
    </div>
  );
}
