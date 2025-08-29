import { LOCALES } from "@/i18n/locales";
import { createContext, useContext } from "react";

export interface LocaleContextType {
  currentLocale: string;
  setCurrentLocale: (locale: string) => void;
}

export const LocaleContext = createContext<LocaleContextType>({
  currentLocale: LOCALES.ENGLISH,
  setCurrentLocale: () => {
    console.log("hello");
  },
});

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
