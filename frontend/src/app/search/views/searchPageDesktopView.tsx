"use client";
import { MySpacing } from "@/shared/styles";

import useSearch from "../hooks/useSearch";
import SearchPageFilters from "../components/searchPageFilters";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import SearchInput from "@/shared/widgets/searchInput/searchInput";
import { MultiValue } from "react-select";
import { OptionType } from "@/shared/widgets/customSelect/customSelect";

export default function SearchPageDesktopView({
  searchController,
}: {
  searchController: ReturnType<typeof useSearch>;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flex: 1,
        gap: MySpacing.s20,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "25%",
          flexDirection: "column",
          gap: MySpacing.s10,
          position: "sticky",
          top: 10,
          paddingBottom: 20,
          overflow: "auto",
        }}
      >
        <SearchInput searchController={searchController}></SearchInput>
        <SearchPageFilters
          filtersController={searchController.filtersController}
        ></SearchPageFilters>
      </div>

      <div
        style={{
          display: "flex",
          width: "75%",
          gap: MySpacing.s10,
          overflow: "auto",
          scrollbarWidth: "none",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <EventsScroll events={searchController.events}></EventsScroll>
      </div>
    </div>
  );
}
