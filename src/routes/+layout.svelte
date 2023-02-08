<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import '../app.postcss';
	import { config, library } from '@fortawesome/fontawesome-svg-core';

	import { fab } from '@fortawesome/free-brands-svg-icons';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { far } from '@fortawesome/free-regular-svg-icons';

	library.add(fab, fas, far);

	import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
	config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

	export let data: PageData;
</script>

<QueryClientProvider client={data.queryClient}>
	<slot />
</QueryClientProvider>
