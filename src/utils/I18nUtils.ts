import { constants } from '../constants';
import type { I18nLanguage } from '../constants/i18n';

export const createI18nContents = <T>(content: Record<I18nLanguage, T>) => ({
  get: (lang: I18nLanguage) => content[lang],
});

export const getLangFromUrl = (url: URL): I18nLanguage => {
  const [, lang] = url.pathname.split('/');

  if (constants.site.languages.includes(lang as I18nLanguage)) {
    return lang as I18nLanguage;
  }

  return constants.site.defaultLanguage;
};
