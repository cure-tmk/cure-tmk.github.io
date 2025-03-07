import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	base: "/",
	integrations: [tailwind(), image()],
	vite: {
		envDir: "./src/config/env",
	},
});
