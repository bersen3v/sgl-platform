import { MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import useCustomFilters from "../hooks/useCustomFilters";
import { useIntl } from "react-intl";

export default function FiltersHeader({
  filtersController,
}: {
  filtersController: ReturnType<typeof useCustomFilters>;
}) {
  const intl = useIntl();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: MySpacing.s5,
      }}
    >
      <h3
        style={{
          ...MyTypography.Helvetica14Medium,
          color: MyColors.grey,
        }}
      >
        {intl.formatMessage({ id: "filters" })}
      </h3>
      <h3
        onClick={() => {
          filtersController.clear();
        }}
        style={{
          ...MyTypography.Helvetica14Medium,
          color: MyColors.grey,
        }}
      >
        {intl.formatMessage({ id: "reset" })}
      </h3>
    </div>
  );
}
