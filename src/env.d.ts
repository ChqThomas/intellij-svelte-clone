/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_VERCEL_GIT_COMMIT_SHA: string;
	readonly VITE_GITHUB_USERNAME: string;
	readonly VITE_GITHUB_REPO: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
