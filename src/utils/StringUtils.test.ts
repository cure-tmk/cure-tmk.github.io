import { ltrim, rtrim } from "./StringUtils";

describe("utils/StringUtils", () => {
	test.each<[string, string, string]>([
		["abc", "", "abc"],
		["abc", "a", "bc"],
		["abc", "ab", "c"],
		["abc", "abc", ""],
		["abc", "b", "abc"],
		["abc", "c", "abc"],
		["abc", "d", "abc"],
	])("ltrim", (str, trim, expected) => {
		expect(ltrim(str, trim)).toEqual(expected);
	});

	test.each<[string, string, string]>([
		["abc", "", "abc"],
		["abc", "c", "ab"],
		["abc", "bc", "a"],
		["abc", "abc", ""],
		["abc", "a", "abc"],
		["abc", "b", "abc"],
		["abc", "d", "abc"],
	])("ltrim", (str, trim, expected) => {
		expect(rtrim(str, trim)).toEqual(expected);
	});
});
