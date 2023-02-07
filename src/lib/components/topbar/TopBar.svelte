<script lang="ts">
	import Icon from './Icon.svelte';
	import Dropdown from './Dropdown.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
	import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
	import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
	import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
	import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
</script>

<header id="topbar" class="flex h-[32px] bg-g border-b-2 border-lg">
	<Icon icon={faBars} />
	<Dropdown text="sveltestorm" />
	<Dropdown text="Version control" />
	<div class="flex-1" />
	<Icon icon={faBug} />
	<Icon icon={faLanguage} />
	<Icon icon={faSearch} />
	<Icon icon={faCog} />
</header>

<style>
	header {
		color: white;
	}
</style>
