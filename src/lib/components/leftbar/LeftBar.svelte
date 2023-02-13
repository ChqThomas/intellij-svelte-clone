<script>
	import RoundedIcon from './RoundedIcon.svelte';
	import Tooltip from '../ui/Tooltip.svelte';
	import Vcs from '$lib/images/icons/vcs_dark.svg?component';
	import Problems from '$lib/images/icons/problems_dark.svg?component';
	import Terminal from '$lib/images/icons/shell_dark.svg?component';
	import More from '$lib/images/icons/moreHorizontal_dark.svg?component';
	import Structure from '$lib/images/icons/structure_dark.svg?component';
	import Commit from '$lib/images/icons/commit_dark.svg?component';
	import Folder from '$lib/images/icons/folder_dark.svg?component';
</script>

<div id="left-bar" class="flex flex-col h-full w-[42px] border-r-2 border-lg box-content">
	<Tooltip title="Coucou">
		<RoundedIcon icon={Folder} />
	</Tooltip>
	<RoundedIcon icon={Commit} />
	<RoundedIcon icon={Structure} />
	<RoundedIcon icon={More} />
	<div class="flex-1" />
	<RoundedIcon icon={Terminal} />
	<RoundedIcon icon={Problems} />
	<RoundedIcon icon={Vcs} />
</div>

<style>
	#left-bar {
		background: #3c3f41;
		color: white;
	}
</style>
