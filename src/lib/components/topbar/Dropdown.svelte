<script>
	import ChevronDown from '$lib/images/icons/chevronDown_dark.svg?component';
	import Icon from '../ui/Icon.svelte';
	export let text = '';
	export let icon = null;
</script>

<div class="flex items-center h-full hover:bg-g-h text-center pl-2 pr-1">
	{#if icon}
		<Icon {icon} type="svg" size="16px" class="mr-1" />
	{/if}
	{text}
	<div class="ml-2">
		<ChevronDown />
	</div>
</div>
