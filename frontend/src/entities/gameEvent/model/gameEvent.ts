export type I18nText = {
  ru: string;
  en: string;
  kk: string;
};

export type GameEvent = {
  id: number;
  previewPhoto: string;
  name: I18nText;
  description: I18nText;
  manager: string;
  developer: string;
  place: I18nText;
  discipline: string;
  startTime: number;
  endTime: number;
  prize: number;
};
