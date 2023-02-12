<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';
	export let filename = '';
	let extension = /(?:\.([^.]+))?$/.exec(filename)[1];
	const svgWhitelist = [
		'eslint',
		'env',
		'html',
		'js',
		'json',
		'md',
		'png',
		'svg',
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
	<img width="16px" height="16px" src="icons/{icon}.svg" alt={icon} />
{:else}
	<FontAwesomeIcon icon={faFile} />
{/if}
