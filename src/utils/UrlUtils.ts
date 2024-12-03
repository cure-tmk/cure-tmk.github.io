import { config } from "../config";
import { constants } from "../constants";
import type { I18nLanguage } from "../constants/i18n";
import { ltrim, rtrim } from "./StringUtils";

export const ASSETS_PATH = "/assets";

export const asset = (
	path: string,
	options: {
		absolute?: boolean;
	} = {},
): string => {
	const base = options.absolute ? config.get("VITE_BASE_URL") : "";
	return [base, ASSETS_PATH, path].reduce(
		(acc, segement) => `${rtrim(acc, "/")}/${ltrim(segement, "/")}`,
	);
};

export const pathToUrl = (path: string): string => {
	const base = config.get("VITE_BASE_URL");
	return `${rtrim(base, "/")}/${ltrim(path, "/")}`;
};

const getUrlLangParam = (url: URL): I18nLanguage | null => {
	const [, lang] = url.pathname.split("/");

	if (constants.site.languages.includes(lang as I18nLanguage)) {
		return lang as I18nLanguage;
	}

	return null;
};

export const getUrlLang = (url: URL): I18nLanguage => {
	const lang = getUrlLangParam(url);

	return lang ?? constants.site.defaultLanguage;
};

export const getLangUrl = (url: URL, lang: I18nLanguage): URL => {
	const currentLang = getUrlLangParam(url);
	if (currentLang == null || currentLang === lang) {
		return url;
	}

	url.pathname = url.pathname.replace(currentLang, lang);

	return url;
};
