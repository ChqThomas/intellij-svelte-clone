import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { TreeItem } from '../services/github';

export const fileTree = createFileTree();
export const activeFileTreeItem: Writable<string> = writable('');
export const openedFile: Writable<string> = writable('');
export const openedFiles = createOpenedFiles();

export const showProject: Writable<boolean> = writable(true);
export const showTerminal: Writable<boolean> = writable(false);

function createOpenedFiles() {
	const store: Writable<TreeItem[]> = writable([]);
	const { subscribe, set, update } = store;

	return {
		subscribe,
		set,
		update,
		open: (item: TreeItem) => {
			openedFile.set(item.path);
			update((n) => {
				if (n.findIndex((x) => x.path === item.path) !== -1) {
					return n;
				}
				return [...n, item];
			});
		},
		close: (item: TreeItem) => {
			update((n) => n.filter((p) => p !== item));
			if (get(openedFile) === item.path) {
				openedFile.set(get(store)?.[0]?.path ?? '');
			}
		}
	};
}

function createFileTree() {
	const store: Writable<TreeItem[]> = writable([]);
	const { subscribe, set, update } = store;

	function nestedEditOpened(tree: TreeItem[], state: boolean) {
		tree.forEach((t) => {
			t.opened = state;
			if (t.items) {
				nestedEditOpened(t.items, state);
			}
		});
	}

	return {
		subscribe,
		set,
		update,
		selectOpened: () => {
			const paths = get(openedFile).split('/');
			update((n) => {
				let current = n;
				paths.forEach((path) => {
					const currentFolder = current.find((i) => i.name === path);
					if (currentFolder) {
						currentFolder.opened = true;
						if (currentFolder.items) {
							current = currentFolder.items;
						}
					}
				});
				activeFileTreeItem.set(get(openedFile));
				return n;
			});
		},
		expandAll: () => {
			update((n) => {
				nestedEditOpened(n, true);
				return n;
			});
		},
		collapseAll: () => {
			update((n) => {
				nestedEditOpened(n, false);
				return n;
			});
		}
	};
}
