"use client";
import useSearch from "../hooks/useSearch";
import SearchPageFilters from "../components/searchPageFilters";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import { useState } from "react";
import { MySpacing } from "@/shared/styles";
import SearchInput from "@/shared/widgets/searchInput/searchInput";
import OpenFiltersButton from "../components/openFitersButton";

export default function SearchPageMobileView({
  searchController,
}: {
  searchController: ReturnType<typeof useSearch>;
}) {
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: MySpacing.s10,
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          width: "100%",
        }}
      >
        <SearchInput searchController={searchController}></SearchInput>
        <OpenFiltersButton
          onClick={() => {
            setIsFilterOpened(!isFilterOpened);
          }}
        ></OpenFiltersButton>
      </div>

      {isFilterOpened ? (
        <div style={{ display: "flex" }}>
          <SearchPageFilters
            onDoneMobileClick={() => setIsFilterOpened(false)}
            isMobileView
            filtersController={searchController.filtersController}
          ></SearchPageFilters>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            overflow: "auto",
            scrollbarWidth: "none",
            paddingBottom: 0,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <EventsScroll
            fullWidth={true}
            events={searchController.events}
          ></EventsScroll>
        </div>
      )}
    </div>
  );
}
