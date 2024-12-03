import { compact } from "./ArrayUtils";

describe("utils/ArrayUtils", () => {
	test.each<[any[], any[]]>([
		[[], []],
		[
			[0, undefined, 1, null, 2, 3],
			[0, 1, 2, 3],
		],
		[
			["a", undefined, "b", null, "c"],
			["a", "b", "c"],
		],
	])("compact", (input, expected) => {
		expect(compact(input)).toEqual(expected);
	});
});
