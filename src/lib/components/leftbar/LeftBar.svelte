<script>
	import RoundedIcon from './RoundedIcon.svelte';
	import Vcs from '$lib/images/icons/vcs_dark.svg?component';
	import Problems from '$lib/images/icons/problems_dark.svg?component';
	import Terminal from '$lib/images/icons/shell_dark.svg?component';
	import More from '$lib/images/icons/moreHorizontal_dark.svg?component';
	import Structure from '$lib/images/icons/structure_dark.svg?component';
	import Commit from '$lib/images/icons/commit_dark.svg?component';
	import Folder from '$lib/images/icons/folder_dark.svg?component';
	import Run from '$lib/images/icons/run_dark.svg?component';
	import { showTerminal, showProject } from '../../stores/states';
</script>

<div
	id="left-bar"
	class="flex flex-col h-full w-[42px] border-r-[1px] border-border-dark box-content"
>
	<div class="p-1 items-center flex gap-[0.6rem] flex-col h-full">
		<RoundedIcon icon={Folder} bind:active={$showProject}>
			Project
			<span class="ml-1 text-body-light">Alt+1</span>
		</RoundedIcon>
		<RoundedIcon icon={Commit}>
			Commit
			<span class="ml-1 text-body-light">Alt+0</span>
		</RoundedIcon>
		<RoundedIcon icon={Structure}>
			Structure
			<span class="ml-1 text-body-light">Alt+7</span>
		</RoundedIcon>
		<RoundedIcon icon={More}>More tool windows</RoundedIcon>
		<div class="flex-1" />
		<div>
			<RoundedIcon icon={Terminal} bind:active={$showTerminal}>
				Terminal
				<span class="ml-1 text-body-light">Alt+F12</span>
			</RoundedIcon>
		</div>
		<RoundedIcon icon={Run}>
			Run
			<span class="ml-1 text-body-light">Alt+4</span>
		</RoundedIcon>
		<RoundedIcon icon={Problems}>
			Problems
			<span class="ml-1 text-body-light">Alt+6</span>
		</RoundedIcon>
		<RoundedIcon icon={Vcs}>
			Git
			<span class="ml-1 text-body-light">Alt+9</span>
		</RoundedIcon>
	</div>
</div>

<style>
	#left-bar {
		background: #3c3f41;
	}
</style>
