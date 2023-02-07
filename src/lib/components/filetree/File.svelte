<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { activeFileTreeItem } from '../../stores/states.ts';

	export let name = '';
</script>

<div
	class="w-full"
	class:active={$activeFileTreeItem === name}
	on:click|preventDefault|stopPropagation={() => ($activeFileTreeItem = name)}
>
	<FontAwesomeIcon icon="far fa-file" />
	{name}
</div>

<style>
	.active {
		background: #4b6eaf;
	}
</style>
