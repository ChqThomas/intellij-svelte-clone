const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: 'class',
	theme: {
		extends: {
			colors: {
				g: '#3c3f41',
				lg: '#464646',
				dg: '#2b2b2b',
				caca: '#2b2b2b'
			}
		}
	},
	plugins: [],
};

module.exports = config;
