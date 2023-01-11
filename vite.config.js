import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: "/drawbridge_web/",
	plugins: [sveltekit()]
};

export default config;
