import { globby } from 'globby';

type TreeItem = {
	name: string;
	type: 'file' | 'folder';
	items: TreeItem[];
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const files = await globby(['.'], {
		gitignore: true
	});

	const objectArray: TreeItem[] = files
		.map((path) => path.split('/'))
		.reduce((items: TreeItem[], path) => insert(items, path), []);

	return {
		files: objectArray
	};
}

function insert(items: TreeItem[] = [], [head, ...tail]: string[]) {
	let child = items.find((child) => child.name === head);
	if (!child) {
		items.push((child = { name: head, type: 'file', items: [] }));
	}
	if (tail.length > 0) {
		child.type = 'folder';
		insert(child.items, tail);
	}
	return items;
}
