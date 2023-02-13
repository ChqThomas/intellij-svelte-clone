import type { HLJSApi } from 'highlight.js';

const languageMapping = {
	html: 'xml',
	js: 'javascript',
	ts: 'typescript',
	cjs: 'javascript',
	svelte: 'svelte',
	json: 'json',
	css: 'css',
	postcss: 'css',
	md: 'markdown'
};

export async function loadHightlighter(extension: keyof typeof languageMapping) {
	const language = getLanguage(extension);
	const hljs = (await import(`highlight.js/lib/core`)).default;

	switch (language) {
		case 'svelte':
			hljs.registerLanguage(
				'javascript',
				(await import(`highlight.js/lib/languages/javascript`)).default
			);
			hljs.registerLanguage(
				'typescript',
				(await import(`highlight.js/lib/languages/typescript`)).default
			);
			hljs.registerLanguage('xml', (await import(`highlight.js/lib/languages/xml`)).default);
			hljs.registerLanguage('css', (await import(`highlight.js/lib/languages/css`)).default);
			hljs.registerLanguage(language, svelteDefinition);
			break;
		case 'javascript':
			hljs.registerLanguage(
				'javascript',
				(await import(`highlight.js/lib/languages/javascript`)).default
			);
			break;
		case 'typescript':
			hljs.registerLanguage(
				'typescript',
				(await import(`highlight.js/lib/languages/typescript`)).default
			);
			break;
		case 'json':
			hljs.registerLanguage('json', (await import(`highlight.js/lib/languages/json`)).default);
			break;
		case 'css':
			hljs.registerLanguage('css', (await import(`highlight.js/lib/languages/css`)).default);
			break;
		case 'markdown':
			hljs.registerLanguage(
				'markdown',
				(await import(`highlight.js/lib/languages/markdown`)).default
			);
			break;
		case 'xml':
			hljs.registerLanguage('xml', (await import(`highlight.js/lib/languages/xml`)).default);
			break;
		default:
			hljs.registerLanguage(
				'plaintext',
				(await import(`highlight.js/lib/languages/plaintext`)).default
			);
			break;
	}

	return hljs.highlight;
}

export function getLanguage(extension: keyof typeof languageMapping) {
	return languageMapping?.[extension] ?? 'plaintext';
}

export default function svelteDefinition(hljs: HLJSApi) {
	return {
		subLanguage: 'xml',
		contains: [
			hljs.COMMENT('<!--', '-->', {
				relevance: 10
			}),
			{
				begin: /^(\s*)(<script(\s*context="module")?>)/gm,
				end: /^(\s*)(<\/script>)/gm,
				subLanguage: 'javascript',
				excludeBegin: true,
				excludeEnd: true,
				contains: [
					{
						begin: /^(\s*)(\$:)/gm,
						end: /(\s*)/gm,
						className: 'keyword'
					}
				]
			},
			{
				begin: /^(\s*)(<style.*>)/gm,
				end: /^(\s*)(<\/style>)/gm,
				subLanguage: 'css',
				excludeBegin: true,
				excludeEnd: true
			},
			{
				begin: /\{/gm,
				end: /\}/gm,
				subLanguage: 'javascript',
				contains: [
					{
						begin: /[\{]/,
						end: /[\}]/,
						skip: true
					},
					{
						begin: /([#:\/@])(if|else|each|await|then|catch|debug|html|key)/gm,
						className: 'keyword',
						relevance: 10
					}
				]
			}
		]
	};
}
