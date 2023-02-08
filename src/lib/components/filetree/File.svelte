<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { activeFileTreeItem, openedFile } from '../../stores/states.ts';
	import type { TreeItem } from '../../services/github.js';

	export let item: TreeItem;
</script>

<div
	class="w-full"
	class:active={$activeFileTreeItem === item.name}
	on:click|preventDefault|stopPropagation={() => ($activeFileTreeItem = item.path)}
	on:dblclick|preventDefault|stopPropagation={() => ($openedFile = item.path)}
>
	<FontAwesomeIcon icon="far fa-file" />
	{item.name}
</div>

<style>
	.active {
		background: #4b6eaf;
	}
</style>
