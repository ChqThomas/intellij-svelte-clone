<script>
	export let icon;
	export let color = '#ced0d6';
	export let size = '20px';
</script>

<svelte:component
	this={icon}
	width={size}
	height={size}
	style="color: {color};"
	class={$$props.class}
/>
