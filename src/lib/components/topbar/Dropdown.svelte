<script>
	import ChevronDown from '$lib/images/icons/chevronDown_dark.svg?component';
	import Icon from './Icon.svelte';
	export let text = '';
	export let icon = null;
</script>

<div class="flex items-center hover:bg-[#4c5052] text-center px-1">
	{#if icon}
		<Icon {icon} type="svg" size="20px" />
	{/if}
	{text}
	<div class="ml-2">
		<ChevronDown />
	</div>
</div>
