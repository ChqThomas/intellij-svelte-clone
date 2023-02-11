<script>
	import RoundedIcon from './RoundedIcon.svelte';
	import Tooltip from '../ui/Tooltip.svelte';
</script>

<div id="left-bar" class="flex flex-col h-full w-[42px] border-r-2 border-lg box-content">
	<Tooltip title="Coucou">
		<RoundedIcon icon={'far fa-folder'} />
	</Tooltip>
	<RoundedIcon icon={'cubes'} />
	<RoundedIcon icon={'fab fa-npm'} />
	<RoundedIcon icon={'ellipsis'} />
	<div class="flex-1" />
	<RoundedIcon icon={'terminal'} />
	<RoundedIcon icon={'circle-exclamation'} />
	<RoundedIcon icon={'code-branch'} />
</div>

<style>
	#left-bar {
		background: #3c3f41;
		color: white;
	}
</style>
