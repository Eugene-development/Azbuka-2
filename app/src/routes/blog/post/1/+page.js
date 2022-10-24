import { contentPost } from '$lib/data/post/1';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentPost };
}
