import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import FiltersBox from "@/shared/widgets/filtersBox/filtersBox";
import useCustomFilters from "@/shared/widgets/filtersBox/hooks/useCustomFilters";

export default function SearchPageFilters({
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
      {filtersController.filtersRequest.isLoaded ? (
        <FiltersBox
          onDoneMobileClick={onDoneMobileClick}
          isMobileView={isMobileView}
          filtersController={filtersController}
        ></FiltersBox>
      ) : (
        <div></div>
      )}
    </>
  );
}
