<script lang="ts">
	import { getContent, getContentUrl } from '../../services/github';
	import type { TreeItem } from '../../services/github';
	import { openedFile, openedFiles } from '../../stores/states';
	import FileIcon from '../ui/FileIcon.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

	let query;
	let image: string | null = null;

	$: {
		if ($openedFile) {
			if ($openedFile.endsWith('.png')) {
				image = getContentUrl($openedFile);
			} else {
				image = null;
				query = createQuery({
					queryKey: ['content', $openedFile],
					queryFn: () => getContent($openedFile)
				});
			}
		}
	}

	function tabClick(e: MouseEvent, item: TreeItem) {
		// Left click
		if (e.button === 0) {
			$openedFile = item.path;
		}
		// Middle click
		else if (e.button === 1) {
			openedFiles.close(item);
		}
	}
</script>

<div class="flex flex-row border-b-[1px] border-[#323232] h-[36px] select-none">
	{#each $openedFiles as item}
		<div
			class="tab flex items-center gap-1 px-2 "
			class:active={item.path === $openedFile}
			on:mouseup={(e) => tabClick(e, item)}
		>
			<FileIcon filename={item.path} />
			<span class="mr-1">
				{item.name}
			</span>
			<span
				class="opacity-0 icon text-[#80848a] rounded-full p-1 h-[16px] w-[16px] flex items-center justify-center"
				on:click|preventDefault|stopPropagation={() => openedFiles.close(item)}
			>
				<FontAwesomeIcon icon={faXmark} size="xs" />
			</span>
		</div>
	{/each}
</div>

<style>
	.active {
		@apply shadow-[inset_0px_-3px_0px_0px_#4a88c7];
	}

	.tab:not(.active):hover {
		@apply bg-[#1c1c1c];
	}

	.active .icon,
	.tab:hover .icon {
		@apply opacity-100;
	}

	.icon:hover {
		@apply opacity-100 bg-[#4c4d4e];
	}
</style>
