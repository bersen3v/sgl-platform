import { LOCALES } from "@/i18n/locales";
import { useLocale } from "@/shared/context/localeContext";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { ChangeEvent } from "react";

export default function LanguageSelect() {
  const { currentLocale, setCurrentLocale } = useLocale();
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setCurrentLocale(selectedValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: MyColors.bg2,
        padding: MySpacing.s10,
        borderRadius: MyBordersRadius.r10,
      }}
    >
      <select
        style={{
          backgroundColor: MyColors.bg2,
          borderWidth: 0,
          outline: "none",
          ...MyTypography.Helvetica14Medium,
          color: MyColors.grey,
        }}
        value={currentLocale}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          handleSelectChange(event);
        }}
      >
        <option value={LOCALES.RUSSIAN}>RU</option>
        <option value={LOCALES.ENGLISH}>EN</option>
        <option value={LOCALES.KAZAKH}>KZ</option>
      </select>
    </div>
  );
}
