<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import '../app.postcss';
	// import 'flowbite/dist/flowbite.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>{import.meta.env.VITE_GITHUB_REPO}</title>
</svelte:head>

<svelte:window on:contextmenu|preventDefault={() => {}} />

<QueryClientProvider client={data.queryClient}>
	<slot />
</QueryClientProvider>
