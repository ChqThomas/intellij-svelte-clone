<script lang="ts">
	import { openedFile } from '../../stores/states';
	import FileIcon from '../ui/FileIcon.svelte';

	$: path = ['intellij-svelte-clone', ...$openedFile.split('/')];
</script>

<div id="breadcrumb" class="flex items-center h-[32px] px-2">
	<span class="blue-square" />
	{#each path as item, i}
		<span class="flex items-center gap-1 hover:text-white hover:bg-[#4c5052] px-1">
			{#if i === path.length - 1}
				{#key $openedFile}
					<FileIcon filename={$openedFile} />
				{/key}
			{/if}
			{item}
		</span>
		{#if i < path.length - 1}
			<span class="px-1"> > </span>
		{/if}
	{/each}
</div>

<style>
</style>
