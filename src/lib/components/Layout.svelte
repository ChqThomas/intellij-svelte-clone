<script>
	import TopBar from './topbar/TopBar.svelte';
	import LeftBar from './leftbar/LeftBar.svelte';
	import RightBar from './rightbar/RightBar.svelte';
	import Footer from './footer/Footer.svelte';
	import Editor from './editor/Editor.svelte';
	import FileTree from './filetree/FileTree.svelte';

	let fileTreeWidth = 500;
	function move(element) {
		return {
			destroy() {}
		};
	}

	function resize(element) {
		const right = document.createElement('div');
		right.direction = 'east';
		right.classList.add('grabber');
		right.classList.add('right');
		right.classList.add('bg-g');

		const grabbers = [right];

		let active = null,
			initialRect = null,
			initialPos = null;

		grabbers.forEach((grabber) => {
			element.appendChild(grabber);
			grabber.addEventListener('mousedown', onMousedown);
		});

		function onMousedown(event) {
			active = event.target;
			const rect = element.getBoundingClientRect();

			initialRect = {
				width: rect.width
			};
			initialPos = { x: event.pageX, y: event.pageY };
			active.classList.add('selected');
		}

		function onMouseup(event) {
			if (!active) return;

			active.classList.remove('selected');
			active = null;
			initialRect = null;
			initialPos = null;
		}

		function onMove(event) {
			if (!active) return;

			const direction = active.direction;
			let delta;

			delta = event.pageX - initialPos.x;
			element.style.width = `${initialRect.width + delta}px`;
		}

		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onMouseup);

		return {
			destroy() {
				window.removeEventListener('mousemove', onMove);
				window.removeEventListener('mousemove', onMousedown);

				grabbers.forEach((grabber) => {
					element.removeChild(grabber);
				});
			}
		};
	}

	let grabber = true;
</script>

<div class="flex flex-col h-screen w-screen border-box overflow-hidden">
	<TopBar />
	<div class="flex flex-1 h-full bg-g min-h-0">
		<LeftBar />
		<div class="flex overflow-y-auto h-full" style="width: {fileTreeWidth}px" use:move use:resize>
			<FileTree />
		</div>
		<div class="flex-1 h-full bg-dg">
			<Editor />
		</div>
		<RightBar />
	</div>
	<Footer />
</div>

<style>
	:global(.grabber) {
		box-sizing: border-box;
	}

	:global(.grabber.right) {
		width: 10px;
		height: 100%;
		cursor: col-resize;
	}

	:global(.hide-grabber .grabber) {
		background: transparent !important;
		border: none !important;
	}

	:global(.grabber.selected) {
		border: solid 1px black;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
