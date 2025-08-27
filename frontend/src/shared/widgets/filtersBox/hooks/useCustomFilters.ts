import {
  Filters,
  InitFilters,
  InitViewModeFilter,
} from "@/entities/filters/model/filters";
import useCustomSelect from "../../customSelect/hooks/useCustomSelect";
import useRequest from "@/shared/network/hooks/useRequest";
import { filtersApiManager } from "@/entities/filters/api/filtersApiManager";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import useCustomInputController from "../../customInput/hooks/customInputController";

export default function useCustomFilters({
  onChange,
}: {
  onChange: () => void;
}) {
  const intl = useIntl();
  const [filters, setFilters] = useState<Filters>(InitFilters);

  const [filtersRequest, reloadFiltersRequest] = useRequest(
    filtersApiManager.getFilters,
    []
  );

  useEffect(() => {
    if (!filtersRequest.isLoading && filtersRequest.isLoaded) {
      setFilters(filtersRequest.data);
    }
  }, [filtersRequest]);

  // const viewModeController = useCustomSelect({
  //   options: filters.viewMode.map((option) => {
  //     return {
  //       value: option.value,
  //       label: intl.formatMessage({ id: option.label }),
  //     };
  //   }),
  //   onChange: onChange,
  // });

  const developersController = useCustomSelect({
    options: filters.developers,
    onChange: onChange,
  });

  const disciplinesController = useCustomSelect({
    options: filters.disciplines,
    onChange: onChange,
  });

  const managersController = useCustomSelect({
    options: filters.managers,
    onChange: onChange,
  });

  const fromDateController = useCustomInputController();
  const beforeDateController = useCustomInputController();

  const prizeMinController = useCustomInputController();
  const prizeMaxController = useCustomInputController();

  const clear = () => {
    // viewModeController.setSelected(InitViewModeFilter);
    managersController.setSelected([]);
    developersController.setSelected([]);
    disciplinesController.setSelected([]);
  };

  return {
    // viewModeController,
    developersController,
    disciplinesController,
    managersController,
    fromDateController,
    beforeDateController,
    prizeMinController,
    prizeMaxController,
    filtersRequest,
    clear,
  };
}
