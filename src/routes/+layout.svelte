<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import '../app.postcss';
	import { config } from '@fortawesome/fontawesome-svg-core';

	import '@fortawesome/fontawesome-svg-core/styles.css';
	config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

	export let data: PageData;
</script>

<svelte:head>
	<title>{import.meta.env.VITE_GITHUB_REPO}</title>
</svelte:head>

<QueryClientProvider client={data.queryClient}>
	<slot />
</QueryClientProvider>
