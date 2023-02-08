import { writable } from 'svelte/store';

export const activeFileTreeItem = writable('');
export const openedFile = writable('README.md');
