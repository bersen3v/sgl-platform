import { useState } from "react";
import DatePicker from "react-datepicker";

export default function CustomDatepicker({
  timestamp,
  setTimestamp,
}: {
  timestamp: number | undefined;
  setTimestamp: (date: number | undefined) => void;
}) {
  const [date, setDate] = useState<Date | null>(
    timestamp ? new Date(timestamp * 1000) : null
  );

  return (
    <DatePicker
      showIcon
      selected={date}
      onChange={(date) => {
        setDate(date);
        setTimestamp(date?.getTime());
      }}
    />
  );
}
