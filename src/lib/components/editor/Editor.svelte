<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { getContent, getContentUrl } from '../../services/github';
	import { openedFile } from '../../stores/states';
	import Tabs from './Tabs.svelte';

	let query;
	let image: string | null = null;

	$: {
		if ($openedFile) {
			if ($openedFile.endsWith('.png')) {
				image = getContentUrl($openedFile);
			} else {
				image = null;
				query = createQuery({
					queryKey: ['content', $openedFile],
					queryFn: () => getContent($openedFile)
				});
			}
		}
	}
</script>

<div class="h-full text-white">
	<div>
		<Tabs />
	</div>
	<div class="whitespace-pre p-2 ">
		{#if image}
			<div class="h-full flex items-center justify-center">
				<img src={image} alt="" />
			</div>
		{:else if $openedFile}
			{#if $query.isLoading}
				<p>Loading...</p>
			{:else if $query.isError}
				<p>Error: {$query.error.message}</p>
			{:else if $query.isSuccess}
				{$query.data}
			{/if}
		{/if}
	</div>
</div>
