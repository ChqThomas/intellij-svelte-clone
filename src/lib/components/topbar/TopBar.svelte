<script lang="ts">
	import Icon from './Icon.svelte';
	import Dropdown from './Dropdown.svelte';
	import Search from '$lib/images/icons/search.svg?component';
	import Settings from '$lib/images/icons/settings_dark.svg?component';
	import Menu from '$lib/images/icons/windowsMenu_dark.svg?component';
	import Vcs from '$lib/images/icons/vcs_dark.svg?component';
	import Debug from '$lib/images/icons/debug_dark.svg?component';
	import AddAcount from '$lib/images/icons/addAccount_dark.svg?component';
	import Webstorm from '$lib/images/icons/WebStorm.svg?component';
	import Minimize from '$lib/images/icons/minimize_dark.svg?component';
	import Restore from '$lib/images/icons/restore_dark.svg?component';
	import Close from '$lib/images/icons/close_dark.svg?component';
</script>

<header id="topbar" class="flex items-center h-[42px] bg-g border-b-2 border-lg box-content">
	<div class="px-3">
		<Webstorm width="20px" />
	</div>
	<Icon icon={Menu} type="svg" />
	<Dropdown text={import.meta.env.VITE_GITHUB_REPO} />
	<Dropdown text="Version control" icon={Vcs} />
	<div class="flex-1" />
	<Icon icon={Debug} type="svg" />
	<Icon icon={AddAcount} type="svg" />
	<Icon icon={Search} type="svg" />
	<Icon icon={Settings} type="svg" />
	<Icon icon={Minimize} type="svg" size="16px" fill="#aeaeae" />
	<Icon icon={Restore} type="svg" size="16px" fill="#aeaeae" />
	<Icon icon={Close} type="svg" size="16px" fill="#aeaeae" />
</header>

<style>
	header {
		color: white;
	}
</style>
