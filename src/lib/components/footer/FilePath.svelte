<script lang="ts">
	let paths = ['sveltestorm', 'src', 'lib', 'components', 'footer', 'FilePath.svelte'];
</script>

<div class="flex h-[32px] px-2">
	{#each paths as path, i}
		<span>{path}</span>
		{#if i < paths.length - 1}
			<span class="px-1"> > </span>
		{/if}
	{/each}
</div>

<style>
</style>
