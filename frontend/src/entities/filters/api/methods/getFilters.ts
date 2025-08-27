import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";
import { Filters } from "../../model/filters";
import { baseUrl } from "@/shared/network/config/baseUrl";

export default async function getFilters(): Promise<Filters> {
  const path = baseUrl + "/getEventsFilters";
  const serverData = await fetchStringFromUrl(path);

  const filters = serverData as {
    managers: string[];
    developers: string[];
    disciplines: string[];
  };

  const data = {
    managers: filters.managers.map((val, ind) => {
      return {
        value: ind,
        label: val,
      };
    }),
    disciplines: filters.disciplines.map((val, ind) => {
      return {
        value: ind,
        label: val,
      };
    }),
    developers: filters.developers.map((val, ind) => {
      return {
        value: ind,
        label: val,
      };
    }),
  };

  return data;
}
