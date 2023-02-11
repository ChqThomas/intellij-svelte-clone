<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	export let icon;
	export let color = '#ced0d6';
</script>

<div
	class="flex items-center justify-center w-[32px] h-[32px] hover:bg-[#4c5052]"
	style="color: {color};"
>
	<FontAwesomeIcon {icon} />
</div>
