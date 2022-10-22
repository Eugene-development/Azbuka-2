import { contentPost } from '$lib/data/post/2';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentPost };
}
