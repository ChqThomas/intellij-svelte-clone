<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	export let icon;
	export let active = false;
</script>

<div
	class="flex items-center justify-center w-[42px] h-[42px] hover:bg-[#4c5052] rounded-lg"
	class:active
>
	<FontAwesomeIcon {icon} size="lg" />
</div>

<style>
	.active {
		background: blue;
	}
</style>
