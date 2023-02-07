import { error } from '@sveltejs/kit';
import { promises as fs } from 'fs';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const content = await fs.readFile(url.searchParams.get('path'));
	return new Response(String(content));
}
