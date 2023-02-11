<script>
	export let text = '';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
</script>

<div class="flex items-center hover:bg-[#4c5052] text-center px-1">
	{text}
	<div class="ml-2">
		<FontAwesomeIcon icon={faAngleDown} size="xs" />
	</div>
</div>
