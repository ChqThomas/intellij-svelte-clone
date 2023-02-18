<script lang="ts">
	import FilePath from './FilePath.svelte';
	import FileInfos from './FileInfos.svelte';
</script>

<footer class="flex items-center h-[32px] border-t-[1px] border-border-light box-content">
	<FilePath />
	<div class="flex-1" />
	<FileInfos />
</footer>

<style>
	footer {
		background: #3c3f41;
	}
</style>
