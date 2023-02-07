<script lang="ts">
	import Layout from '$components/Layout.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Layout files={data.files} />
