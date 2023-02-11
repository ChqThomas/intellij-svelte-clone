const owner = import.meta.env.VITE_GITHUB_USERNAME;
const repo = import.meta.env.VITE_GITHUB_REPO;

export type GithubTreeItem = {
	path: string;
	mode: string;
	type: 'blob' | 'tree';
	sha: string;
	size: number;
	url: string;
	pathArray: string[];
};

export type TreeItem = {
	name: string;
	path: string;
	type: 'file' | 'folder';
	items: TreeItem[];
};

export async function getTree(): Promise<GithubTreeItem[]> {
	const response = await fetch(
		`https://api.github.com/repos/${owner}/${repo}/git/trees/master?recursive=true`
	);
	const data = await response.json();
	return data.tree;
}

export async function getFormattedTree(): Promise<TreeItem[]> {
	const cacheKey = 'tree';

	let treeItems = getFromLocalstorage(cacheKey, true) as TreeItem[];

	if (treeItems === null) {
		const tree = await getTree();
		const files = tree
			.filter((t) => t.type === 'blob')
			.map((f) => {
				return f.path;
			});

		treeItems = files.reduce((items: TreeItem[], path) => insert(items, path, path), []);
		saveToLocalstorage(cacheKey, treeItems, true);
	}

	return treeItems;
}

export async function getContent(path: string) {
	const cacheKey = `file_${path}`;
	let fileContent = getFromLocalstorage(cacheKey, false) as string;
	if (fileContent === null) {
		const res = await fetch(getContentUrl(path));
		fileContent = await res.text();
		saveToLocalstorage(cacheKey, fileContent, false);
	}
	return fileContent;
}

export function getContentUrl(path: string) {
	return `https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`;
}

function insert(items: TreeItem[] = [], path: string, absolutePath: string) {
	const [head, ...tail] = path.split('/');
	let child = items.find((child) => child.name === head);
	if (!child) {
		items.push((child = { name: head, type: 'file', items: [], path: absolutePath }));
	}
	if (tail.length > 0) {
		child.type = 'folder';
		insert(child.items, tail.join('/'), absolutePath);
	}
	return items;
}

function getCacheKey(key: string) {
	return `${key}_${import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA}`;
}

function saveToLocalstorage(key: string, data: any, json: boolean) {
	if (json) {
		data = JSON.stringify(data);
	}
	window.localStorage.setItem(getCacheKey(key), data);
}
function getFromLocalstorage(key: string, json: boolean): string | object | null {
	let data = window.localStorage.getItem(getCacheKey(key));
	if (data) {
		if (json) {
			data = JSON.parse(data);
		}
		return data;
	}
	return null;
}
