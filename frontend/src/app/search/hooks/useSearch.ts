import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import useRequest from "@/shared/network/hooks/useRequest";
import { OptionType } from "@/shared/widgets/customSelect/customSelect";
import useCustomFilters from "@/shared/widgets/filtersBox/hooks/useCustomFilters";
import { useEffect, useLayoutEffect, useState } from "react";
import { MultiValue, SingleValue } from "react-select";

export default function useSearch() {
  const [events, setEvents] = useState<GameEvent[] | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearchQuery = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  const filtersController = useCustomFilters({
    onChange: () => {},
  });

  const [searchEventsRequest, reloadSearchEventsRequest] = useRequest(
    () =>
      gameEventApiManager.searchEvents({
        query: searchQuery,
        disciplines: (
          filtersController.disciplinesController
            .selected as MultiValue<OptionType>
        )
          ?.map((e) => `"${e.label}"`)
          .join(","),

        managers: (
          filtersController.managersController
            .selected as MultiValue<OptionType>
        )
          ?.map((e) => `"${e.label}"`)
          .join(","),

        developers: (
          filtersController.developersController
            .selected as MultiValue<OptionType>
        )
          ?.map((e) => `"${e.label}"`)
          .join(","),

        prizeMin: Number(filtersController.prizeMinController.value),
        prizeMax: Number(filtersController.prizeMaxController.value),
        startTime: new Date(
          filtersController.fromDateController.value
        ).getTime(),
        endTime: new Date(
          filtersController.beforeDateController.value
        ).getTime(),
      }),
    [
      searchQuery,
      filtersController.fromDateController.value,
      filtersController.beforeDateController.value,
      filtersController.developersController.selected,
      filtersController.managersController.selected,
      filtersController.disciplinesController.selected,
      filtersController.prizeMinController.value,
      filtersController.prizeMaxController.value,
    ]
  );

  useEffect(() => {
    if (searchEventsRequest.isLoaded && !searchEventsRequest.isLoading) {
      setEvents(searchEventsRequest.data);
    }
  }, [searchEventsRequest]);

  return {
    events,
    filtersController,
    searchQuery,
    onChangeSearchQuery,
  };
}
