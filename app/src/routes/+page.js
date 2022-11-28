// import { contentTest } from '$lib/data/test/index';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ data }) {
// 	console.log(data);
// 	const response2 = data.response1;
// 	return { response2, contentTest };
// }

import { contentMain } from '$lib/data/main';
import { contentBenefits } from '$lib/data/benefits';
import { contentCooperation } from '$lib/data/cooperation';
import { contentBlog } from '$lib/data/blog';
/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	return { contentMain, contentBenefits, contentCooperation, contentBlog, data };
}
