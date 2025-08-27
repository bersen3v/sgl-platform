export default function getFormattedDateFromTimestamp(timestamp: number) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const m = month < 10 ? `0${month}` : month;
  const d = day < 10 ? `0${day}` : day;

  const formattedDate = `${year}-${m}-${d}`;

  return formattedDate;
}
