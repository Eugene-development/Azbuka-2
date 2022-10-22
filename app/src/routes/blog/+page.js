import { contentBlog } from '$lib/data/blog';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentBlog };
}
