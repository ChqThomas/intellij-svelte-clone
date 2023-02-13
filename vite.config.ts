import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as child from 'child_process';
import svg from '@poppanator/sveltekit-svg';

process.env.VITE_VERCEL_GIT_COMMIT_SHA =
	process.env.VITE_VERCEL_GIT_COMMIT_SHA ||
	child.execSync('git rev-parse HEAD').toString().trimEnd();

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/images/icons', './static/icons'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } }
					}
					// { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		})
	]
});
