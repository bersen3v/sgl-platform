"use client";
import { MySpacing } from "@/shared/styles";
import useSearch from "./hooks/useSearch";
import SearchPageDesktopView from "./views/searchPageDesktopView";
import SearchPageMobileView from "./views/searchPageMobileView";
import { useWindowSize } from "react-use";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import { MultiValue } from "react-select";
import { OptionType } from "@/shared/widgets/customSelect/customSelect";

export default function SearchPage() {
  const searchController = useSearch();
  const { width } = useWindowSize();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        padding: MySpacing.s25,
        paddingBottom: 0,
        paddingTop: 0,
        gap: MySpacing.s15,
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        {width > desktopMinWidth ? (
          <SearchPageDesktopView
            searchController={searchController}
          ></SearchPageDesktopView>
        ) : (
          <SearchPageMobileView
            searchController={searchController}
          ></SearchPageMobileView>
        )}
      </div>
    </div>
  );
}
