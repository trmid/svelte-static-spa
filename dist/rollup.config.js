import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
import fs from 'fs';
import { join } from 'path';
import { globSync } from 'glob';
import { spawn } from 'child_process';
import SSS from './sss.config.json' assert {type: "json"};
import nodePackage from "./package.json" assert {type: "json"};

// Determine production or development:
const production = !process.env.ROLLUP_WATCH;

// Out directory:
const out = "docs";

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

// Custom plugin to delete build folder before re-write:
const clearBuild = () => ({
  name: "Clear Build",
  buildStart: () => {
    fs.rmSync(join(process.cwd(), out, "build"), { force: true, recursive: true });
  }
});

// Custom plugin to write service worker to out folder:
const generateSW = () => ({
	name: "Service Worker Generator",
	writeBundle: () => {

    // Build essential file cache list:
    const essentialCache = new Set(["./", ...globSync(SSS.cache.files.essential, { ignore: [...SSS.cache.files.ignore], nodir: true, cwd: join(process.cwd(), out) }).map(x => x.replaceAll(`\\`, "/"))]);
		
		// Build secondary file cache list:
		const secondaryCache = new Set(
      globSync("**/*", { ignore: [...SSS.cache.files.ignore, ...SSS.cache.files.essential], nodir: true, cwd: join(process.cwd(), out) }).map(x => x.replaceAll(`\\`, "/"))
    );

		// Read sw-template:
		const template = fs.readFileSync("src/sw.template.js", { encoding: 'utf-8' });

		// Replace markers:
		const sw = `/* WARNING!!! THIS FILE WAS AUTO-GENERATED BY rollup.config.js AND WAS COPIED FROM "src/sw.template.js". ANY CHANGES TO THIS FILE WILL BE OVERWRITTEN ON THE NEXT BUILD!!! */\n\n` + template
			.replace(/\$PACKAGE\_VERSION/g, nodePackage.version + (production ? "" : ":" + Math.floor(Math.random() * 0xffffffff).toString(16)))
			.replace(/\$ESSENTIAL_FILES_TO_CACHE/g, JSON.stringify([...essentialCache]))
      .replace(/\$SECONDARY_FILES_TO_CACHE/g, JSON.stringify([...secondaryCache]));

		// Copy sw.js to out:
		const swFilename = join(out, "sw.js")
		fs.writeFileSync(swFilename, sw, { encoding: 'utf-8' });

		// Done!
		console.log('\x1b[32m%s\x1b[0m', `created ${out}/sw.js`);
	}
});

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: !production,
		format: 'es',
		name: 'app',
		dir: `${out}/build/`
	},
	plugins: [
		clearBuild(),
		svelte({
			preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),
		json(),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			preferBuiltins: false
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production,
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the out directory and refresh the
		// browser on changes when not in production
		!production && livereload(out),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		// Write service worker to out folder
		generateSW()
	],
	watch: {
		clearScreen: false
	}
};
