"use client";

import useRequest from "@/shared/network/hooks/useRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import EventPageDesktopView from "./views/eventPageDesktopView";
import EventPageMobileView from "./views/eventPageMobileView";
import { useWindowSize } from "react-use";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import { useIntl } from "react-intl";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { MyColors } from "@/shared/styles";
import CustomFooter from "@/shared/widgets/customFooter/customFooter";

export default function EventPageView({ eventId }: { eventId: number }) {
  const { width } = useWindowSize();
  const intl = useIntl();
  const [getEventRequest, reloadGetEventRequest] = useRequest(
    () => gameEventApiManager.getEventById({ eventId: eventId }),
    []
  );

  return (
    <div
      style={{
        display: "flex",
        scrollbarWidth: "none",
        width: "100%",
        flexDirection: "column",
      }}
    >
      {getEventRequest.isLoaded && !getEventRequest.isLoading ? (
        <>
          {width > desktopMinWidth ? (
            <EventPageDesktopView
              event={getEventRequest.data}
            ></EventPageDesktopView>
          ) : (
            <EventPageMobileView
              event={getEventRequest.data}
            ></EventPageMobileView>
          )}
        </>
      ) : (
        <div>
          <h2
            style={{ ...MyTypography.Helvetica16Normal, color: MyColors.bg3 }}
          >
            {intl.formatMessage({ id: "loading" })}
          </h2>
        </div>
      )}
      <CustomFooter></CustomFooter>
    </div>
  );
}
