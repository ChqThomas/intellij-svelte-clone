<script lang="ts">
	import Settings from '$lib/images/icons/settings_dark.svg?component';
	import Icon from './Icon.svelte';
	import UiIcon from '../ui/Icon.svelte';
	import { Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';

	const classes = 'text-xs text-left hover:bg-lightblue-2 rounded-md pl-2 pr-2 py-0 h-full';
	const classesDivider = 'my-1 h-px bg-[#515151]';
</script>

<Icon icon={Settings} type="svg" />
<Dropdown
	offset="0"
	class="bg-g px-2 py-1 border-2 border-border-light w-[190px]"
	placement="bottom"
>
	<DropdownItem class={classes}>Update 3 plugins...</DropdownItem>
	<DropdownDivider class={classesDivider} />
	<DropdownItem class={classes}>Run anything...</DropdownItem>
	<DropdownDivider class={classesDivider} />
	<DropdownItem class={classes + ' flex items-center'}>
		<UiIcon icon={Settings} size="16px" class="mr-1" />
		Settings...
		<div class="flex-1" />
		Ctrl+Alt+S
	</DropdownItem>
	<DropdownItem class={classes}>Plugins...</DropdownItem>
	<DropdownDivider class={classesDivider} />
	<DropdownItem class={classes}>Settings Sync...</DropdownItem>
	<DropdownDivider class={classesDivider} />
	<DropdownItem class={classes}>Theme...</DropdownItem>
	<DropdownItem class={classes}>Keymap...</DropdownItem>
	<DropdownItem class={classes}>View Mode...</DropdownItem>
</Dropdown>
