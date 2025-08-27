export default function addLeadingZero({ num }: { num: number }): string {
  const strNum = num.toString();
  return strNum.length == 1 ? `0${strNum}` : strNum;
}
