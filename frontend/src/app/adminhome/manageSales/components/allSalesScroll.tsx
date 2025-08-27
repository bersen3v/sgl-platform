import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { Sale } from "@/entities/sale/model/sale";
import { userApiManager } from "@/entities/user/api/userApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import timestamp2dm from "@/shared/tools/timestamp2dm";
import timestamp2year from "@/shared/tools/timestamp2year";
import { CustomButton } from "@/shared/widgets/customButton";
import { CSSProperties } from "react";
import { AutoSizer } from "react-virtualized";
import { FixedSizeList as List } from "react-window";

export default function AllSalesScroll({
  sales,
  onSaleRemove,
}: {
  sales: Sale[];
  onSaleRemove: ({
    userId,
    eventId,
  }: {
    userId: number;
    eventId: number;
  }) => void;
}) {
  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const sale = sales[index];

    const [getUserRequest, reloadGetUserRequest] = useRequest(
      () =>
        userApiManager.getUserById({
          id: sale.userId.toString(),
        }),
      []
    );

    const [getEventRequest, reloadEventRequest] = useRequest(
      () =>
        gameEventApiManager.getEventById({
          eventId: sale.eventId,
        }),
      []
    );

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
          backgroundColor: MyColors.bg2,
          padding: MySpacing.s15,
          borderRadius: MyBordersRadius.r20,
        }}
      >
        <div>
          <h2 style={{ ...MyTypography.Helvetica19Medium }}>
            id продажи: {sale.id}
          </h2>

          <h2 style={{ ...MyTypography.Helvetica19Medium }}>
            покупатель:{" "}
            {getUserRequest.isLoaded &&
              !getUserRequest.isLoading &&
              `${getUserRequest.data.firstName}
               ${getUserRequest.data.lastName}`}
          </h2>

          <h2 style={{ ...MyTypography.Helvetica19Medium }}>
            событие:{" "}
            {getEventRequest.isLoaded &&
              !getEventRequest.isLoading &&
              getEventRequest.data.name.ru}
          </h2>

          {/* <h2 style={{ ...MyTypography.Helvetica19Medium }}>
            дата продажи: {timestamp2dm({ timestamp: sale.time })},{" "}
            {timestamp2year({ timestamp: sale.time })}
          </h2> */}
        </div>

        <div>
          <CustomButton
            onClick={() => {
              onSaleRemove({
                userId: sale.userId,
                eventId: sale.eventId,
              });
            }}
            label={"Отменить"}
          ></CustomButton>
        </div>
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemSize={150}
          itemCount={sales.length}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
}
