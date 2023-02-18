<script>
	import { clickoutside } from '@svelte-put/clickoutside';
	export let icon;
	export let active = false;
	export let focused = false;
	export let size = '20px';
	import { Tooltip } from 'flowbite-svelte';
	const style = 'custom';
</script>

<div
	class="flex items-center justify-center h-[30px] w-[30px] hover:bg-g-h rounded-lg"
	class:active
	class:focused
	use:clickoutside
	on:clickoutside={() => {
		focused = false;
	}}
	on:click={() => {
		active = !active;
		focused = active;
	}}
>
	<svelte:component this={icon} width={size} height={size} class="text-icon-light" />
</div>
<Tooltip
	class="bg-tooltip text-[#a9acac] text-sm rounded-none border-2 border-border-light p-1"
	arrow={false}
	{style}
	placement="right"><slot /></Tooltip
>

<style>
	.active {
		@apply bg-[#5c6164];
	}
	.active.focused {
		@apply bg-[#3573f0];
	}
</style>
