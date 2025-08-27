import { LOCALES } from "@/i18n/locales";
import { createContext } from "react";

export const LocaleContext = createContext(LOCALES.ENGLISH);
