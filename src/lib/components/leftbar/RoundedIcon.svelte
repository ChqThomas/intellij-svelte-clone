<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	export let icon;
	export let active = false;
</script>

<div class="w-[32px] h-[32px] hover:bg-[#4c5052] text-center rounded-lg" class:active>
	<FontAwesomeIcon {icon} />
</div>

<style>
	.active {
		background: blue;
	}
</style>
