export interface BaseSelect<T> {
  value: T,
  name: string,
  description?: string
}

export interface CountrySelect extends BaseSelect<AppLangsEnum> {
  flag: string;
}

export type LangConfig = {
  flagEmoji?: string;
};

export enum AppLangsEnum {
  English = 'en',
  Spanish = 'es',
};

export var AppLangsConfig: { [key in AppLangsEnum]: LangConfig } = {
  [AppLangsEnum.English]: {
    flagEmoji: '🇬🇧'
  },
  [AppLangsEnum.Spanish]: {
    flagEmoji: '🇪🇸'
  },
};