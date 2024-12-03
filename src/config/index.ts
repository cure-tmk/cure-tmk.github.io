import { Configure } from "./Configure";

export type Config = {
	VITE_APP_ENV: string;
	VITE_BASE_URL: string;
};

const data: Config = {
	VITE_APP_ENV: import.meta.env.VITE_APP_ENV,
	VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
};

export const config = new Configure(data);
