import type { Terminal, ITheme } from 'xterm';
import { fileTree } from '../stores/states';
import { get } from 'svelte/store';

// Custom theme to match style of xterm.js logo
const baseTheme: ITheme = {
	foreground: '#F8F8F8',
	background: '#2b2b2b',
	selectionBackground: '#214283',
	selectionForeground: '#F8F8F8',
	black: '#1E1E1D',
	brightBlack: '#262625',
	red: '#CE5C5C',
	brightRed: '#FF7272',
	green: '#5BCC5B',
	brightGreen: '#72FF72',
	yellow: '#CCCC5B',
	brightYellow: '#FFFF72',
	blue: '#5D5DD3',
	brightBlue: '#7279FF',
	magenta: '#BC5ED1',
	brightMagenta: '#E572FF',
	cyan: '#5DA5D5',
	brightCyan: '#72F0FF',
	white: '#F8F8F8',
	brightWhite: '#FFFFFF',
	cursorAccent: '#2b2b2b'
};

type CustomTerminal = Terminal & {
	_initialized: boolean;
};

export default async function loadTerminal(el: HTMLElement) {
	const xterm = await import('xterm');
	const xtermFitAddon = await import('xterm-addon-fit');
	const term = new xterm.Terminal({
		fontFamily: '"Cascadia Code", Menlo, monospace',
		theme: baseTheme,
		cursorBlink: true,
		allowProposedApi: true
	}) as CustomTerminal;

	const fitAddon = new xtermFitAddon.FitAddon();
	term.loadAddon(fitAddon);

	// Cancel wheel events from scrolling the page if the terminal has scrollback

	term.open(el);

	fitAddon.fit();

	// document.querySelector('.xterm').addEventListener('wheel', (e) => {
	// 	if (term.buffer.active.baseY > 0) {
	// 		e.preventDefault();
	// 	}
	// });

	function runFakeTerminal() {
		if (term._initialized) {
			return;
		}

		term._initialized = true;

		prompt(term);
		term.writeln(['help', 'Terminal powered by Xterm.js', ''].join('\n\r'));
		term.writeln('Below is a simple emulated backend, try running `help`.');
		prompt(term);

		term.onData((e) => {
			switch (e) {
				case '\u0003': // Ctrl+C
					term.write('^C\n\r');
					prompt(term);
					break;
				case '\r': // Enter
					runCommand(term, command);
					command = '';
					break;
				case '\u007F': // Backspace (DEL)
					// Do not delete the prompt
					if (term._core.buffer.x > 2) {
						term.write('\b \b');
						if (command.length > 0) {
							command = command.substr(0, command.length - 1);
						}
					}
					break;
				default: // Print all other characters for demo
					if ((e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7e)) || e >= '\u00a0') {
						command += e;
						term.write(e);
					}
			}
		});
	}

	function prompt(term: CustomTerminal) {
		command = '';
		term.write(
			`\x1b[32mthomas\x1b[97m:\x1b[36m~/projects/${import.meta.env.VITE_GITHUB_REPO}\x1b[97m$ `
		);
	}

	let command = '';
	const commands = {
		help: {
			f: () => {
				term.writeln(
					[
						'Welcome to xterm.js! Try some of the commands below.',
						'',
						...Object.keys(commands).map((e) => `  ${e.padEnd(10)} ${commands[e].description}`)
					].join('\n\r')
				);
				prompt(term);
			},
			description: 'Prints this help message'
		},
		ls: {
			f: () => {
				term.writeln(
					get(fileTree)
						.map((f) => f.name)
						.join('\r\n')
				);
				prompt(term);
			},
			description: 'Prints a fake directory structure'
		}
	};

	function runCommand(term: CustomTerminal, text: string) {
		const command = text.trim().split(' ')[0];
		if (command.length > 0) {
			term.writeln('');
			if (command in commands) {
				commands[command].f();
				return;
			}
			term.writeln(`${command}: command not found`);
		}
		prompt(term);
	}

	runFakeTerminal();
}
