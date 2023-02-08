<script>
	import { createQuery } from '@tanstack/svelte-query';
	import Folder from './Folder.svelte';
	import { getFormattedTree } from '../../services/github';

	const query = createQuery({
		queryKey: ['repoData'],
		queryFn: getFormattedTree,
		retry: false
	});
</script>

<div class="bg-g text-white p-2 h-full w-full select-none">
	{#if $query.isLoading}
		<p>Loading...</p>
	{:else if $query.isError}
		<p>Error while loading repository content</p>
	{:else if $query.isSuccess}
		<Folder opened={true} name="project" items={$query.data} />
	{/if}
</div>
