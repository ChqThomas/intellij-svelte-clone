<script>
	import RoundedIcon from './RoundedIcon.svelte';
	import Tooltip from '../ui/Tooltip.svelte';
	import {
		faTerminal,
		faCircleExclamation,
		faCodeBranch,
		faEllipsis,
		faCubes,
		faFolder
	} from '@fortawesome/free-solid-svg-icons';
	import { faNpm } from '@fortawesome/free-brands-svg-icons';
</script>

<div id="left-bar" class="flex flex-col h-full w-[42px] border-r-2 border-lg box-content">
	<Tooltip title="Coucou">
		<RoundedIcon icon={faFolder} />
	</Tooltip>
	<RoundedIcon icon={faCubes} />
	<RoundedIcon icon={faNpm} />
	<RoundedIcon icon={faEllipsis} />
	<div class="flex-1" />
	<RoundedIcon icon={faTerminal} />
	<RoundedIcon icon={faCircleExclamation} />
	<RoundedIcon icon={faCodeBranch} />
</div>

<style>
	#left-bar {
		background: #3c3f41;
		color: white;
	}
</style>
