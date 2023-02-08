<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { getContent } from '../../services/github';
	import { openedFile } from '../../stores/states';

	let query;

	$: {
		if ($openedFile) {
			query = createQuery({
				queryKey: ['content', $openedFile],
				queryFn: () => getContent($openedFile)
			});
		}
	}
</script>

<div class="bg-dg h-full text-white p-2">
	{#if $openedFile}
		{#if $query.isLoading}
			<p>Loading...</p>
		{:else if $query.isError}
			<p>Error: {$query.error.message}</p>
		{:else if $query.isSuccess}
			{$query.data}
		{/if}
	{/if}
</div>
