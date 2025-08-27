import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import SearchIcon from "../../../../public/icons/search.svg";
import { useIntl } from "react-intl";
import useSearch from "@/app/search/hooks/useSearch";

export default function SearchInput({
  searchController,
}: {
  searchController: ReturnType<typeof useSearch>;
}) {
  const intl = useIntl();
  return (
    <div
      style={{
        display: "flex",
        height: 50,
        width: "100%",
        backgroundColor: MyColors.bg2,
        borderRadius: MyBordersRadius.r15,
        padding: MySpacing.s10,
        alignItems: "center",
        paddingLeft: MySpacing.s15,
        gap: MySpacing.s10,
      }}
    >
      <input
        placeholder={intl.formatMessage({ id: "search" })}
        color={MyColors.white}
        value={searchController.searchQuery}
        onChange={searchController.onChangeSearchQuery}
        style={{
          ...MyTypography.Helvetica14Medium,
          caretColor: MyColors.white,
          color: MyColors.white,
          display: "flex",
          height: "100%",
          width: "100%",
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      ></input>
      <SearchIcon width={28} height={24}></SearchIcon>
    </div>
  );
}
