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
	:global(.fonts-fallback body .editor) {
		font-size: 14px;
		line-height: 1.5;
		font-family: 'Courier New';
		letter-spacing: -0.2px;
		word-spacing: 1.35px;
		font-weight: 100;
		visibility: visible;
	}

	:global(.fonts-loaded body .editor) {
		font-family: 'JetBrains Mono', sans-serif;
		font-size: 14px;
	}
</style>
