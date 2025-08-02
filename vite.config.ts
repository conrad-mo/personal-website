import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		Icons({
			compiler: 'svelte'
		}),
		sveltekit()
	]
});
