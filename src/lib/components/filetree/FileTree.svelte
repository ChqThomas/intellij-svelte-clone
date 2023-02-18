<script>
	import { clickoutside } from '@svelte-put/clickoutside';
	import Folder from './Folder.svelte';
	import Header from './Header.svelte';
	import { getFormattedTree } from '../../services/github';
	import { fileTree, openedFiles } from '../../stores/states';
	import { onMount } from 'svelte';

	let loaded = false;
	let error = false;
	let tree = null;
	let focused = false;
	let hovered = false;
	let showMenu;

	$: showMenu = focused || hovered;

	onMount(async () => {
		try {
			$fileTree = await getFormattedTree();
			openedFiles.open($fileTree.find((item) => item.name === 'README.md'));
			loaded = true;
		} catch (e) {
			error = true;
		}
	});

	$: tree = $fileTree;
</script>

<div
	class="bg-g p-2 h-full w-full select-none"
	on:mouseover={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	use:clickoutside
	on:clickoutside={() => {
		focused = false;
	}}
	on:click={() => {
		focused = true;
	}}
>
	<Header {showMenu} />
	{#if error}
		<p>Error while loading repository content</p>
	{:else if !loaded}
		<p>Loading...</p>
	{:else if tree}
		<Folder opened={true} name={import.meta.env.VITE_GITHUB_REPO} items={tree} />
	{/if}
</div>
