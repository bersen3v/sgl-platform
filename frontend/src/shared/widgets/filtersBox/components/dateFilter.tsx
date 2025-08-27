import { useIntl } from "react-intl";
import useCustomInputController from "../../customInput/hooks/customInputController";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import CustomDatepicker from "../../customDatepicker/customDatepicker";
import CustomInput from "../../customInput/customInput";
import useCustomFilters from "../hooks/useCustomFilters";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function DateFilter({
  filtersController,
}: {
  filtersController: ReturnType<typeof useCustomFilters>;
}) {
  const intl = useIntl();

  return (
    <>
      <h3
        style={{
          ...MyTypography.Helvetica14Medium,
          color: MyColors.grey,
          padding: MySpacing.s5,
          paddingBottom: 0,
        }}
      >
        {intl.formatMessage({ id: "event_dates" })}
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: MySpacing.s5,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CustomInput
            type="date"
            bgColor={MyColors.bg3}
            controller={filtersController.fromDateController}
          ></CustomInput>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomInput
            type="date"
            bgColor={MyColors.bg3}
            controller={filtersController.beforeDateController}
          ></CustomInput>
        </div>
      </div>
    </>
  );
}
