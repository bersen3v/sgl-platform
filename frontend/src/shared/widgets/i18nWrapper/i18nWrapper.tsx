import { ReactNode } from "react";
import { IntlProvider } from "react-intl";

export default function I18nWrapper({
  children,
  locale,
  messages,
}: {
  locale: string;
  messages: Record<string, string>;
  children: ReactNode;
}) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
