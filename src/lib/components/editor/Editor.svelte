<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { getContent, getContentUrl } from '../../services/github';
	import { openedFile } from '../../stores/states';
	import Tabs from './Tabs.svelte';
	import Highlight from './Highlight.svelte';

	let query;
	let image: string | null = null;
	let filetype = null;

	$: {
		if ($openedFile) {
			if ($openedFile.endsWith('.png')) {
				image = getContentUrl($openedFile);
				filetype = 'image';
			} else {
				if ($openedFile.endsWith('.svg')) {
					filetype = 'svg';
				} else {
					filetype = 'text';
				}
				query = createQuery({
					queryKey: ['content', $openedFile],
					queryFn: () => getContent($openedFile)
				});
			}
		}
	}
</script>

<div class="flex flex-col h-full text-white">
	<Tabs />
	<div class="flex-1 overflow-y-auto whitespace-pre p-2">
		{#if filetype === 'image'}
			<div class="h-full flex items-center justify-center">
				<img src={image} alt="" />
			</div>
		{:else if $openedFile}
			{#if $query.isLoading}
				<p>Loading...</p>
			{:else if $query.isError}
				<p>Error: {$query.error.message}</p>
			{:else if $query.isSuccess}
				{#if filetype === 'svg'}
					<div class="svg-container h-full flex items-center justify-center">
						{@html $query.data}
					</div>
				{:else}
					{#key $openedFile}
						<Highlight file={$openedFile} fileContent={$query.data} />
					{/key}
				{/if}
			{/if}
		{/if}
	</div>
</div>

<style>
	:global(.svg-container > svg) {
		width: 128px;
		height: 128px;
	}
</style>
