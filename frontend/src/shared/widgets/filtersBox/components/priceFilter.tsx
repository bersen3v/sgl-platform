import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import CustomInput from "../../customInput/customInput";
import { useIntl } from "react-intl";
import useCustomInputController from "../../customInput/hooks/customInputController";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import useCustomFilters from "../hooks/useCustomFilters";

export default function PriceFilter({
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
        {intl.formatMessage({ id: "prize_fond" })}
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomInput
          type="number"
          bgColor={MyColors.bg3}
          placeholder={intl.formatMessage({ id: "from" })}
          controller={filtersController.prizeMinController}
        ></CustomInput>
        <div
          style={{
            display: "flex",
            backgroundColor: MyColors.grey,
            width: 30,
            height: 2,
            margin: MySpacing.s5,
            borderRadius: MyBordersRadius.r30,
          }}
        ></div>
        <CustomInput
          type="number"
          bgColor={MyColors.bg3}
          placeholder={intl.formatMessage({ id: "before" })}
          controller={filtersController.prizeMaxController}
        ></CustomInput>
      </div>
    </>
  );
}
