import { contentPost } from '$lib/data/post/3';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentPost };
}
