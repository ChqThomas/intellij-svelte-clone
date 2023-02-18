<script lang="ts">
	import Icon from '../ui/Icon.svelte';
	import Close from '$lib/images/icons/close_dark.svg?component';
	import Add from '$lib/images/icons/add_dark.svg?component';
	import ChevronDown from '$lib/images/icons/chevronDown_dark.svg?component';
	import MoreVertical from '$lib/images/icons/moreVertical_dark.svg?component';
	import Minimize from '$lib/images/icons/minimize_dark.svg?component';
	import { onMount } from 'svelte';
	import 'xterm/css/xterm.css';
	import loadTerminal from '../../services/terminal';
	import { fade } from 'svelte/transition';
	import { showTerminal } from '../../stores/states.js';

	const generateId = () => Math.random().toString(36).substr(2, 9);

	let tabs = [
		{
			id: generateId(),
			name: 'Local'
		}
	];

	function openTerminal() {
		let name = 'Local';
		let names = tabs.map((t) => t.name);
		if (names.includes('Local')) {
			let id = 2;
			while (names.includes(`Local (${id})`)) {
				id++;
			}
			name = `Local (${id})`;
		}

		let id = generateId();
		tabs = [
			...tabs,
			{
				id,
				name
			}
		];
		activeTab = id;
	}

	function tabClick(e: MouseEvent, id: string) {
		// Left click
		if (e.button === 0) {
			activeTab = id;
		}
		// Middle click
		else if (e.button === 1) {
			closeTerminal(id);
		}
	}

	function closeTerminal(id) {
		tabs = tabs.filter((t) => t.id !== id);
	}

	let activeTab = tabs[0].id;

	let hovered = false;

	onMount(async () => {
		loadTerminal(document.getElementById('terminal'));
	});
</script>

<div
	class="flex flex-col h-[285px] border-t-[1px] border-border-dark"
	on:mouseover={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<div class="h-[40px] flex items-center">
		<span class="font-bold pl-2 pr-4">Terminal</span>
		<div class="flex flex-1 h-full items-center">
			{#each tabs as tab (tab.id)}
				<div
					class="tab flex items-center gap-1 px-2 h-full "
					class:active={tab.id === activeTab}
					on:mouseup={(e) => tabClick(e, tab.id)}
				>
					<span class="mr-1">
						{tab.name}
					</span>
					<span
						class="icon text-[#80848a] rounded-full p-1 h-[18px] w-[18px] flex items-center justify-center"
						on:click|preventDefault|stopPropagation={() => closeTerminal(tab.id)}
					>
						<Icon icon={Close} size="18px" />
					</span>
				</div>
			{/each}
			<div class="p-2" on:click={openTerminal}>
				<Icon icon={Add} size="18px" />
			</div>
			<div class="p-2">
				<Icon icon={ChevronDown} size="18px" />
			</div>
		</div>
		{#if hovered}
			<div class="flex items-center" transition:fade={{ duration: 150 }}>
				<div class="p-2">
					<Icon icon={MoreVertical} size="18px" />
				</div>
				<div class="p-2" on:click={() => ($showTerminal = false)}>
					<Icon icon={Minimize} size="18px" />
				</div>
			</div>
		{/if}
	</div>
	<div class="flex-1 bg-dg overflow-y-scroll">
		<div id="terminal" class="p-2 h-full overflow-y-scroll" />
	</div>
</div>

<style>
	.active {
		@apply shadow-[inset_0px_-3px_0px_0px_#4a88c7];
	}

	.tab:not(.active):hover {
		@apply bg-[#1c1c1c];
	}

	.icon:hover {
		@apply opacity-100 bg-[#4c4d4e];
	}
</style>
