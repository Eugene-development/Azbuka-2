import { contentBlog } from '$lib/data/blog';
import { contentPost } from '$lib/data/post/3';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentPost, contentBlog };
}
