import { type I18nLanguage, i18nLanguageLabelMap } from "../constants/i18n";

export const createI18nContents = <T>(content: Record<I18nLanguage, T>) => ({
	get: (lang: I18nLanguage) => content[lang],
});

export const getLangLabel = (lang: I18nLanguage): string => {
	return i18nLanguageLabelMap[lang];
};
