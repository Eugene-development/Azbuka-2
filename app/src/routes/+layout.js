import { contentFooter } from '$lib/data/footer/index';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { contentFooter };
}
