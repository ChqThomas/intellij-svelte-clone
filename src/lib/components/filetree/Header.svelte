<script lang="ts">
	import Icon from '../ui/Icon.svelte';
	import ChevronDown from '$lib/images/icons/chevronDown_dark.svg?component';
	import ExpandAll from '$lib/images/icons/expandAll_dark.svg?component';
	import More from '$lib/images/icons/moreVertical_dark.svg?component';
	import CollapseAll from '$lib/images/icons/collapseAll_dark.svg?component';
	import Minimize from '$lib/images/icons/minimize_dark.svg?component';
	import Locate from '$lib/images/icons/locate_dark.svg?component';
	import { fade } from 'svelte/transition';
	import { showProject, fileTree } from '../../stores/states';
	export let showMenu = false;
</script>

<div class="flex items-center pb-3">
	<span class="font-bold mr-1">Project</span>
	<ChevronDown />
	<div class="flex-1" />
	{#if showMenu}
		<div
			class="flex items-center gap-1"
			in:fade={{ duration: 150 }}
			out:fade={{ duration: 150, delay: 150 }}
		>
			<div class="hover:bg-g-h p-[0.12rem]" on:click={fileTree.selectOpened}>
				<Icon size="16px" icon={Locate} />
			</div>
			<div class="hover:bg-g-h p-[0.12rem]" on:click={fileTree.expandAll}>
				<Icon size="16px" icon={ExpandAll} />
			</div>
			<div class="hover:bg-g-h p-[0.12rem]" on:click={fileTree.collapseAll}>
				<Icon size="16px" icon={CollapseAll} />
			</div>
			<div class="hover:bg-g-h p-[0.12rem]">
				<Icon size="16px" icon={More} />
			</div>
			<div class="hover:bg-g-h p-[0.12rem]" on:click={() => ($showProject = false)}>
				<Icon size="16px" icon={Minimize} />
			</div>
		</div>
	{/if}
</div>
