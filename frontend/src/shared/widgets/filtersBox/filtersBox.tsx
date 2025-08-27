import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { InitViewModeFilter } from "@/entities/filters/model/filters";
import SearchInput from "../searchInput/searchInput";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomSelect from "../customSelect/customSelect";
import CustomInput from "../customInput/customInput";
import useCustomFilters from "./hooks/useCustomFilters";
import { CustomButton } from "../customButton";
import { useIntl } from "react-intl";
import FilterSelects from "./components/filterSelects";
import FiltersHeader from "./components/filtersHeader";
import PriceFilter from "./components/priceFilter";
import DateFilter from "./components/dateFilter";

export default function FiltersBox({
  filtersController,
  isMobileView = false,
  onDoneMobileClick = () => {},
}: {
  filtersController: ReturnType<typeof useCustomFilters>;
  isMobileView?: boolean;
  onDoneMobileClick?: () => void;
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: MySpacing.s10,
          backgroundColor: MyColors.bg2,
          borderRadius: MyBordersRadius.r20,
          gap: MySpacing.s10,
        }}
      >
        <FiltersHeader filtersController={filtersController}></FiltersHeader>
        <FilterSelects filtersController={filtersController}></FilterSelects>
        <PriceFilter filtersController={filtersController}></PriceFilter>
        <DateFilter filtersController={filtersController}></DateFilter>

        {isMobileView && (
          <CustomButton
            onClick={() => {
              onDoneMobileClick();
            }}
            label={"Применить"}
          ></CustomButton>
        )}
      </div>
    </>
  );
}
