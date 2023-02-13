<script lang="ts">
	import '$lib/styles/editor.css';
	import { loadHightlighter, getLanguage } from '../../services/hightlight';

	export let fileContent = '';
	export let file = '';
	let extension = /(?:\.([^.]+))?$/.exec(file)[1];
	let language = getLanguage(extension);
</script>

<!--<div bind:this={divEl} class="h-full" />-->

<div class="editor language-{language} h-full select-text">
	{#await loadHightlighter(extension) then highlight}
		{@html highlight(fileContent, {
			language
		}).value}
	{/await}
</div>

<style>
	.editor {
		font-family: 'JetBrains Mono', sans-serif;
		font-size: 14px;
	}
</style>
