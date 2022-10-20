import { contentTest } from '$lib/data/test/index';

/** @type {import('./$types').PageServerLoad} */
export async function load({ data }) {
	console.log(data);
	const response2 = data.response1;
	return { response2, contentTest };
}
