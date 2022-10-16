import { contentTest } from '$lib/data/test/index';

/** @type {import('./$types').PageServerLoad} */
export async function load({ data }) {
	const response2 = data.response1;
	if (response2) return { response2, contentTest };
}
