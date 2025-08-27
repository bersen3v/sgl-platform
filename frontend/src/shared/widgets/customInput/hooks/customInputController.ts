import { useState } from "react";

export default function useCustomInputController(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    handleInputChange,
  };
}
