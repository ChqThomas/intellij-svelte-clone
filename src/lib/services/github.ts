const owner = 'ChqThomas';
const repo = 'intellij-svelte-clone';

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
	const tree = await getTree();
	const files = tree
		.filter((t) => t.type === 'blob')
		.map((f) => {
			return f.path;
		});

	return files.reduce((items: TreeItem[], path) => insert(items, path, path), []);
}

export async function getContent(path: string) {
	const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`);
	return await res.text();
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
