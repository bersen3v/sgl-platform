import { useIntl } from "react-intl";
import CustomSelect from "../../customSelect/customSelect";
import useCustomFilters from "../hooks/useCustomFilters";
import { InitViewModeFilter } from "@/entities/filters/model/filters";

export default function FilterSelects({
  filtersController,
}: {
  filtersController: ReturnType<typeof useCustomFilters>;
}) {
  const intl = useIntl();
  return (
    <>
      {/* <CustomSelect
        placeholder={"Вид"}
        isMulti={false}
        customSelectController={filtersController.viewModeController}
        defaultValue={{
          label: intl.formatMessage({ id: InitViewModeFilter.label }),
          value: InitViewModeFilter.value,
        }}
      ></CustomSelect> */}
      <CustomSelect
        placeholder={intl.formatMessage({ id: "discipline" })}
        customSelectController={filtersController.disciplinesController}
      ></CustomSelect>
      <CustomSelect
        placeholder={intl.formatMessage({ id: "manager" })}
        customSelectController={filtersController.managersController}
      ></CustomSelect>
      <CustomSelect
        placeholder={intl.formatMessage({ id: "developer" })}
        customSelectController={filtersController.developersController}
      ></CustomSelect>
    </>
  );
}
