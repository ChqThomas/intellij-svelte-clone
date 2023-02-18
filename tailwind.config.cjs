const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	mode: 'jit',
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: 'class',
	theme: {
		 /**
		  * -h = hover variant
		  * -hh = nested hover
		  * -a = active
		  * -ah = active + hover
		  */
			colors: {
				// Fonts
				body: '#bbbbbb',
				'body-light': '#999999',
				// Backgrounds
				g: '#3c3f41',
				'g-h': '#4c5052',
				lg: '#464646',
				dg: '#2b2b2b',
				// Editor
				editor: '#2b2b2b',
				'editor-h': '#1c1c1c',
				'editor-ah': '#343536',
				'editor-hh': '#373737',
				'editor-hah': '#444444',
				// Borders
				'border-light': '#515151',
				'border-dark': '#323232',
				// Colors
				white: '#ffffff',
				green: '#5fad65',
				'green-h': '#508e54',
				red: '#e35252',
				blue: '#548af7',
				'blue-2': '#3369d6',
				'blue-2-h': '#2e5ec1',
				lightblue: '#4a88c7',
				'lightblue-2': '#4b6eaf',
				// UI
				scrollbar: '#595b5d',
				'icon-light': '#ced0d6',
				'tooltip': '#4b4d4d',
			}
	},
	plugins: [
		//require('flowbite/plugin')
	],
};

module.exports = config;
