<script lang="ts">
	import Icon from '../ui/Icon.svelte';
	import Locked from '$lib/images/icons/locked_dark.svg?component';
	import Unlocked from '$lib/images/icons/unlocked_dark.svg?component';

	let locked = false;
</script>

<div
	id="footer-infos"
	class="h-full flex items-center justify-center px-3 text-[13px] text-[#AEAEAE]"
>
	<div>19:40</div>
	<div>LF</div>
	<div>UTF-8</div>
	<div>Tab*</div>
	<div on:click={() => (locked = !locked)}>
		<Icon icon={locked ? Locked : Unlocked} size="16px" />
	</div>
</div>

<style>
	#footer-infos > div {
		@apply h-full flex items-center px-[0.4rem];
	}

	#footer-infos > div:hover {
		@apply bg-g-h;
	}
</style>
