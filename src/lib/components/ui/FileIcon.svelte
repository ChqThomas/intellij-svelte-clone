<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	export let filename = '';
	let extension = /(?:\.([^.]+))?$/.exec(filename)[1];
	const svgWhitelist = [
		'eslint',
		'html',
		'js',
		'json',
		'md',
		'png',
		'npmrc',
		'postcss',
		'prettier',
		'svelte',
		'ts'
	];

	const specialIconMapping = {
		'.eslintignore': 'eslint',
		'.eslintrc.cjs': 'eslint',
		'.gitignore': 'gitignore',
		'.npmrc': 'npmrc',
		'.prettierignore': 'prettier',
		'.prettierrc': 'prettier',
		'package-lock.json': 'npmrc',
		'package.json': 'npmrc',
		'postcss.config.cjs': 'postcss',
		'svelte.config.cjs': 'svelte',
		'tailwind.config.cjs': 'tailwindcss',
		'tsconfig.json': 'ts',
		'vite.config.ts': 'vite'
	};

	let icon = svgWhitelist.includes(extension) ? extension : null;

	if (specialIconMapping?.[filename]) {
		icon = specialIconMapping[filename];
	}
</script>

{#if icon}
	<img src="icons/{icon}.svg" alt="" />
{:else}
	<FontAwesomeIcon icon="far fa-file" />
{/if}
