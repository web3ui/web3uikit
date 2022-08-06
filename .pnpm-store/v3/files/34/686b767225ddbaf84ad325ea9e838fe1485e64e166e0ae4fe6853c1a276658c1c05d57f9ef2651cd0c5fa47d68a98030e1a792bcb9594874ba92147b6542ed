import type { Options } from '@sveltejs/vite-plugin-svelte';
export default function csfPlugin(svelteOptions?: Options): {
    name: string;
    enforce: string;
    transform(code: string, id: string): Promise<{
        code: string;
    } | undefined>;
};
