// import { contentTest } from '$lib/data/test/index';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ data }) {
// 	console.log(data);
// 	const response2 = data.response1;
// 	return { response2, contentTest };
// }

import { contentBenefits } from '$lib/data/benefits';
import { contentCooperation } from '$lib/data/cooperation';
import { contentBlog } from '$lib/data/blog';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentBenefits, contentCooperation, contentBlog };
}
