<script>
	export let icon;
	export let active = false;
	export let size = '20px';
</script>

<div
	class="flex items-center justify-center w-[42px] h-[42px] hover:bg-[#4c5052] rounded-lg"
	class:active
>
	<svelte:component this={icon} width={size} height={size} />
</div>

<style>
	.active {
		background: blue;
	}
</style>
