<script>
	import Folder from './Folder.svelte';

	export let items = [
		{
			name: 'File 3',
			type: 'file'
		},
		{
			name: 'File 1',
			type: 'file'
		},
		{
			name: 'Folder 3',
			type: 'folder',
			items: [
				{
					name: 'caca 2',
					type: 'file'
				},
				{
					name: 'pipi 2',
					type: 'file'
				}
			]
		},
		{
			name: 'File 2',
			type: 'file'
		},
		{
			name: 'Folder 1',
			type: 'folder',
			items: [
				{
					name: 'caca',
					type: 'file'
				},
				{
					name: 'pipi',
					type: 'file'
				},
				{
					name: 'Folder 2',
					type: 'folder',
					items: [
						{
							name: 'caca 2',
							type: 'file'
						},
						{
							name: 'pipi 2',
							type: 'file'
						}
					]
				}
			]
		}
	];

	console.log(items);
</script>

<div class="bg-g text-white p-2 h-full w-full select-none">
	<Folder opened={true} name="project" {items} />
</div>
