<script lang="ts">
	import { activeFileTreeItem, openedFiles } from '../../stores/states.ts';
	import type { TreeItem } from '../../services/github.js';
	import FileIcon from '../ui/FileIcon.svelte';

	export let item: TreeItem;
</script>

<div
	class="ml-4 w-full flex items-center gap-1"
	class:active={$activeFileTreeItem === item.path}
	on:click|preventDefault={() => ($activeFileTreeItem = item.path)}
	on:dblclick|preventDefault={() => openedFiles.open(item)}
>
	<FileIcon filename={item.path} />
	{item.name}
</div>

<style>
	.active {
		@apply bg-lightblue-2;
	}
</style>
