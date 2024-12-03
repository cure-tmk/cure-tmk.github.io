declare module "*.astro" {
	import type { ComponentInstance } from "astro";
	const component: ComponentInstance["default"];
	export default component;
}
