<script>
	export let text = '';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
</script>

<div class="flex hover:bg-[#4c5052] text-center px-1">
	{text}
	<FontAwesomeIcon icon={faAngleDown} />
</div>
