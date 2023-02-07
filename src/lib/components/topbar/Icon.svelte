<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	export let icon;
</script>

<div class="w-[32px] h-[32px] hover:bg-[#4c5052] text-center">
	<FontAwesomeIcon {icon} />
</div>
