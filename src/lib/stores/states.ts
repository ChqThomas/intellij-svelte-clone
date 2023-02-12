import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { TreeItem } from '../services/github';

export const activeFileTreeItem: Writable<string> = writable('');
export const openedFile: Writable<string> = writable('');
export const openedFiles = createOpenedFiles();

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
