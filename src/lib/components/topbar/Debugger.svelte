<script>
	import Icon from '../ui/Icon.svelte';
	import ChevronDown from '$lib/images/icons/chevronDown_dark.svg?component';
	import Run from '$lib/images/icons/run_dark.svg?component';
	import Debug from '$lib/images/icons/debug_dark.svg?component';
	import More from '$lib/images/icons/moreVertical_dark.svg?component';
	let active = false;
</script>

<div
	id="debugger"
	class="text-white flex items-center rounded bg-blue-2 text-center mr-[3.1rem]"
	class:active
	class:bg-green={active}
>
	<div class="flex items-center !pl-3">
		Current File <Icon size="16px" color="white" icon={ChevronDown} />
	</div>
	<div on:click={() => (active = !active)}><Icon icon={Run} size="17px" color="white" /></div>
	<div><Icon icon={Debug} size="17px" color="white" /></div>
	<div><Icon icon={More} size="17px" color="white" /></div>
</div>

<style>
	#debugger > div {
		@apply hover:bg-blue-2-h px-2 py-1 h-full;
	}

	#debugger.active > div {
		@apply hover:bg-green-h;
	}
</style>
