<script>
	import Folder from './Folder.svelte';
	import { getFormattedTree } from '../../services/github';
	import { openedFiles } from '../../stores/states';
	import { onMount } from 'svelte';

	let loaded = false;
	let error = false;
	let tree = null;

	onMount(async () => {
		try {
			tree = await getFormattedTree();
			openedFiles.open(tree.find((item) => item.name === 'README.md'));
			loaded = true;
		} catch (e) {
			error = true;
		}
	});
</script>

<div class="bg-g text-white p-2 h-full w-full select-none">
	{#if error}
		<p>Error while loading repository content</p>
	{:else if !loaded}
		<p>Loading...</p>
	{:else if tree}
		<Folder opened={true} name={import.meta.env.VITE_GITHUB_REPO} items={tree} />
	{/if}
</div>
