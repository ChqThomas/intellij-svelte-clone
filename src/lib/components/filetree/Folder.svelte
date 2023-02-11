<script lang="ts">
	import File from './File.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { activeFileTreeItem } from '$stores/states.ts';
	import type { TreeItem } from '../../services/github';
	import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
	import { faFolder } from '@fortawesome/free-regular-svg-icons';

	export let name = '';
	export let items: TreeItem[] = [];
	export let opened = true;

	items.sort(function (a, b) {
		if (a.type < b.type) return 1;
		if (a.type > b.type) return -1;
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
	});
</script>

<div>
	<div
		class="w-full"
		class:active={$activeFileTreeItem === name}
		on:click|preventDefault|stopPropagation={() => ($activeFileTreeItem = name)}
		on:dblclick|preventDefault|stopPropagation={() => (opened = !opened)}
	>
		<span class="mr-1" on:click|preventDefault|stopPropagation={() => (opened = !opened)}>
			{#if opened}
				<FontAwesomeIcon icon={faAngleDown} size="xs" />
			{:else}
				<FontAwesomeIcon icon={faAngleRight} size="xs" />
			{/if}
		</span>
		<FontAwesomeIcon icon={faFolder} />
		{name}
	</div>
	{#if opened}
		<div class="pl-3 ml-1 border-l-2 border-lg">
			{#each items as item (item.path)}
				{#if item.type === 'folder'}
					<svelte:self opened={true} name={item.name} items={item.items} />
				{:else if item.type === 'file'}
					<File {item} />
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	.active {
		background: #4b6eaf;
	}
</style>
