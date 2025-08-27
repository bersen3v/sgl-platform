import { useState } from "react";
import { MultiValue, SingleValue } from "react-select";
import { OptionsType, OptionType } from "../customSelect";

export default function useCustomSelect({
  options,
  onChange,
}: {
  options: OptionsType;
  onChange: () => void;
}) {
  const [selected, setSelectedInner] = useState<
    MultiValue<OptionType> | SingleValue<OptionType>
  >();

  const setSelected = (
    value: MultiValue<OptionType> | SingleValue<OptionType>
  ) => {
    onChange();
    setSelectedInner(value);
  };

  return {
    options,
    selected,
    setSelected,
  };
}
