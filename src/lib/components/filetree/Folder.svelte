<script lang="ts">
	import File from './File.svelte';
	import { activeFileTreeItem } from '$stores/states.ts';
	import type { TreeItem } from '../../services/github';
	import Folder from '$lib/images/icons/folder_dark.svg?component';
	import ChevronDown from '$lib/images/icons/chevronDown_dark.svg?component';
	import ChevronRight from '$lib/images/icons/chevronRight_dark.svg?component';

	export let name = '';
	export let items: TreeItem[] = [];
	export let opened = false;

	items.sort(function (a, b) {
		if (a.type < b.type) return 1;
		if (a.type > b.type) return -1;
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
	});
</script>

<div>
	<div
		class="w-full flex items-center"
		class:active={$activeFileTreeItem === name}
		on:click|preventDefault={() => ($activeFileTreeItem = name)}
		on:dblclick|preventDefault={() => (opened = !opened)}
	>
		<span class="mr-1 mb-1" on:click|preventDefault|stopPropagation={() => (opened = !opened)}>
			{#if opened}
				<ChevronDown />
			{:else}
				<ChevronRight />
			{/if}
		</span>
		<Folder class="mr-1 mb-1" width="16px" height="16px" />
		{name}
	</div>
	{#if opened}
		<div class="pl-3 ml-1 border-l-[1px] border-border-light">
			{#each items as item (item.path)}
				{#if item.type === 'folder'}
					<svelte:self bind:opened={item.opened} name={item.name} items={item.items} />
				{:else if item.type === 'file'}
					<File {item} />
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	.active {
		@apply bg-lightblue-2;
	}
</style>
