<script lang="ts">
	import { openedFile } from '../../stores/states';

	$: path = $openedFile.split('/');
</script>

<div class="flex h-[32px] px-2">
	{#each path as item, i}
		<span>{item}</span>
		{#if i < path.length - 1}
			<span class="px-1"> > </span>
		{/if}
	{/each}
</div>

<style>
</style>
