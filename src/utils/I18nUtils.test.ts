import { I18nLanguage } from "../constants/i18n";
import { getLangLabel } from "./I18nUtils";

describe("utils/I18nUtils", () => {
	test.each<[I18nLanguage, string]>([
		[I18nLanguage.Ja, "Ja"],
		[I18nLanguage.En, "En"],
	])("getLangLabel(%s) = %s", (lang, label) => {
		expect(getLangLabel(lang)).toBe(label);
	});
});
