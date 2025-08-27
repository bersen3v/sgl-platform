import { OptionsType } from "@/shared/widgets/customSelect/customSelect";
import { useIntl } from "react-intl";

export type Filters = {
  // viewMode: OptionsType;
  managers: OptionsType;
  disciplines: OptionsType;
  developers: OptionsType;
};

export const InitFilters = {
  // viewMode: [],
  managers: [],
  disciplines: [],
  developers: [],
};

export const InitViewModeFilter = {
  label: "all",
  value: 1,
};
