<script>
	import Icon from '../ui/Icon.svelte';
	export let icon;
	export let size = '20px';
</script>

<div class="flex items-center justify-center w-[32px] h-[32px] hover:bg-[#4c5052]">
	<Icon {icon} {size} />
</div>
