"use client";
import { saleApiManager } from "@/entities/sale/api/saleApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import AllSalesScroll from "./components/allSalesScroll";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { userApiManager } from "@/entities/user/api/userApiManager";

export default function ManageSalesPage() {
  const router = useRouter();

  const [getAllSalesRequest, reloadGetAllSalesRequest] = useRequest(
    saleApiManager.getAllSales,
    []
  );

  const [removeSaleRequest, mutateRemoveSaleRequest] = useMutateRequest(
    saleApiManager.removeSale,
    {
      onSuccess: () => {
        reloadGetAllSalesRequest();
      },
    }
  );

  const onSaleRemove = ({
    userId,
    eventId,
  }: {
    userId: number;
    eventId: number;
  }) => {
    mutateRemoveSaleRequest({
      userId: userId,
      eventId: eventId,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        padding: MySpacing.s25,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: "column",
        gap: MySpacing.s25,
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: MySpacing.s10,
          }}
        >
          <CustomBackButton></CustomBackButton>
          <h1 style={{ ...MyTypography.Helvetica22Normal }}>Продажи</h1>
        </div>
        <div style={{ flex: 1, flexGrow: 1 }}></div>
        <div style={{ flexGrow: 0 }}>
          <CustomButton
            onClick={() => {
              router.push("/adminhome/manageSales/createSale");
            }}
            label={"Сделать продажу"}
          ></CustomButton>
        </div>
      </div>

      <div style={{ display: "flex", height: "100%" }}>
        {getAllSalesRequest.isLoaded && !getAllSalesRequest.isLoading ? (
          <AllSalesScroll
            sales={getAllSalesRequest.data}
            onSaleRemove={onSaleRemove}
          ></AllSalesScroll>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
