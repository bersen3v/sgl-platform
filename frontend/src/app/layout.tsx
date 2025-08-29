"use client";
import localFont from "next/font/local";
import "./globals.css";

import { messages } from "../i18n/messges";
import CustomHeader from "@/shared/widgets/customHeader/customHeader";

import { useState } from "react";
import { LOCALES } from "@/i18n/locales";
import I18nWrapper from "@/shared/widgets/i18nWrapper/i18nWrapper";

import { LocaleContext } from "@/shared/context/localeContext";
import { Toaster, toast } from "sonner";

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeue-Thin.otf",
      weight: "200",
      style: "thin",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Roman.otf",
      weight: "500",
      style: "roman",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Medium.otf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultLocale = LOCALES.ENGLISH;
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  const localeContextValue = {
    currentLocale,
    setCurrentLocale,
  };

  return (
    <html lang="en" style={{ height: "100%", scrollbarWidth: "none" }}>
      <body
        className={`${helvetica.className} antialiased`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <LocaleContext.Provider value={localeContextValue}>
          <I18nWrapper
            locale={defaultLocale}
            messages={messages[currentLocale]}
          >
            <Toaster position="top-right" richColors></Toaster>
            <CustomHeader></CustomHeader>
            <main style={{ flex: 1 }}>{children}</main>
          </I18nWrapper>
        </LocaleContext.Provider>
      </body>
    </html>
  );
}
