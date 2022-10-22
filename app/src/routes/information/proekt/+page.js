import { contentProject } from '$lib/data/information/project';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentProject };
}
