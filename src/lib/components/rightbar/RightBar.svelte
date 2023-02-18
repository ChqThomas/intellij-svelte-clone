<script lang="ts">
	import Icon from '../ui/Icon.svelte';
	import Notification from '$lib/images/icons/notifications_dark.svg?component';
</script>

<div
	id="right-bar"
	class="h-full w-[40px] border-l-[1px] border-border-dark box-content flex justify-center"
>
	<div class="p-2">
		<Icon icon={Notification} />
	</div>
</div>

<style>
	#right-bar {
		background: #3c3f41;
		color: white;
	}
</style>
