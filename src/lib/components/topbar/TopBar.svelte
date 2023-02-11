<script lang="ts">
	import Icon from './Icon.svelte';
	import Dropdown from './Dropdown.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
	import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
	import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
	import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
	import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
	import { faWindowRestore } from '@fortawesome/free-regular-svg-icons/faWindowRestore';
	import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
	import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
</script>

<header id="topbar" class="flex items-center h-[42px] bg-g border-b-2 border-lg box-content">
	<Icon icon={faBars} />
	<Dropdown text="sveltestorm" />
	<Dropdown text="Version control" />
	<div class="flex-1" />
	<Icon icon={faBug} />
	<Icon icon={faLanguage} />
	<Icon icon={faSearch} />
	<Icon icon={faCog} />
	<Icon icon={faMinus} color="#aeaeae" />
	<Icon icon={faWindowRestore} color="#aeaeae" />
	<Icon icon={faXmark} color="#aeaeae" />
</header>

<style>
	header {
		color: white;
	}
</style>
