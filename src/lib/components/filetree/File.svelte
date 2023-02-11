<script lang="ts">
	import { activeFileTreeItem, openedFile } from '../../stores/states.ts';
	import type { TreeItem } from '../../services/github.js';
	import FileIcon from '../ui/FileIcon.svelte';

	export let item: TreeItem;
</script>

<div
	class="w-full flex items-center gap-1"
	class:active={$activeFileTreeItem === item.path}
	on:click|preventDefault|stopPropagation={() => ($activeFileTreeItem = item.path)}
	on:dblclick|preventDefault|stopPropagation={() => ($openedFile = item.path)}
>
	<FileIcon filename={item.path} />
	{item.name}
</div>

<style>
	.active {
		background: #4b6eaf;
	}
</style>
