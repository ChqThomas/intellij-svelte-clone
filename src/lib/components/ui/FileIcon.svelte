<script>
	import Icon from '../ui/Icon.svelte';
	import File from '$lib/images/icons/text_dark.svg?component';
	import FileEnv from '$lib/images/icons/files/env.svg?component';
	import FileEslint from '$lib/images/icons/files/eslint.svg?component';
	import FileGitignore from '$lib/images/icons/files/gitignore.svg?component';
	import FileHtml from '$lib/images/icons/files/html.svg?component';
	import FileJs from '$lib/images/icons/files/js.svg?component';
	import FileJson from '$lib/images/icons/files/json.svg?component';
	import FileMd from '$lib/images/icons/files/md.svg?component';
	import FileNpmrc from '$lib/images/icons/files/npmrc.svg?component';
	import FilePng from '$lib/images/icons/files/png.svg?component';
	import FilePostcss from '$lib/images/icons/files/postcss.svg?component';
	import FilePrettier from '$lib/images/icons/files/prettier.svg?component';
	import FileSvelte from '$lib/images/icons/files/svelte.svg?component';
	import FileSvg from '$lib/images/icons/files/svg.svg?component';
	import FileTailwindcss from '$lib/images/icons/files/tailwindcss.svg?component';
	import FileTs from '$lib/images/icons/files/ts.svg?component';
	import FileVite from '$lib/images/icons/files/vite.svg?component';

	export let filename = '';
	let extension = /(?:\.([^.]+))?$/.exec(filename)[1];

	const extensionMapping = {
		eslint: FileEslint,
		env: FileEnv,
		html: FileHtml,
		js: FileJs,
		json: FileJson,
		md: FileMd,
		png: FilePng,
		svg: FileSvg,
		npmrc: FileNpmrc,
		postcss: FilePostcss,
		prettier: FilePrettier,
		svelte: FileSvelte,
		ts: FileTs
	};

	const specialIconMapping = {
		'.eslintignore': FileEslint,
		'.eslintrc.cjs': FileEslint,
		'.gitignore': FileGitignore,
		'.npmrc': FileNpmrc,
		'.prettierignore': FilePrettier,
		'.prettierrc': FilePrettier,
		'package-lock.json': FileNpmrc,
		'package.json': FileNpmrc,
		'postcss.config.cjs': FilePostcss,
		'svelte.config.cjs': FileSvelte,
		'tailwind.config.cjs': FileTailwindcss,
		'tsconfig.json': FileTs,
		'vite.config.ts': FileVite
	};

	let icon = extensionMapping?.[extension] ?? specialIconMapping?.[filename] ?? null;
</script>

{#if icon}
	<svelte:component this={icon} width="16px" height="16px" />
{:else}
	<Icon icon={File} size="16px" />
{/if}
