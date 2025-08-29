"use client";

import { LocaleContext } from "@/shared/context/localeContext";
import { useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";

export default function useCurrentLocale() {
  const currentLocale = useContext(LocaleContext);

  return {
    currentLocale: currentLocale.currentLocale.split("-")[0] as
      | "en"
      | "kk"
      | "ru",
  };
}
