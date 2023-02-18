<script>
	import Icon from '../ui/Icon.svelte';
	export let icon;
	export let size = '20px';
</script>

<div class="flex items-center justify-center w-[42px] h-full hover:bg-g-h">
	<Icon {icon} {size} />
</div>
