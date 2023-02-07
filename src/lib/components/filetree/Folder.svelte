<script>
	import File from './File.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { activeFileTreeItem } from '$stores/states.ts';

	export let name = '';
	export let items = [];
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
		<span on:click|preventDefault|stopPropagation={() => (opened = !opened)}>
			{#if opened}
				<FontAwesomeIcon icon={'angle-down'} />
			{:else}
				<FontAwesomeIcon icon={'angle-right'} />
			{/if}
		</span>
		<FontAwesomeIcon icon="far fa-folder" />
		{name}
	</div>
	{#if opened}
		<div class="pl-3 ml-3 border-l-2 border-lg">
			{#each items as item}
				{#if item.type === 'folder'}
					<svelte:self opened={false} name={item.name} items={item.items} />
				{:else if item.type === 'file'}
					<File name={item.name} />
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
