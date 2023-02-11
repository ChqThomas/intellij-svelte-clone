import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as child from 'child_process';

process.env.VITE_VERCEL_GIT_COMMIT_SHA =
	process.env.VITE_VERCEL_GIT_COMMIT_SHA ||
	child.execSync('git rev-parse HEAD').toString().trimEnd();

export default defineConfig({
	plugins: [sveltekit()]
});
