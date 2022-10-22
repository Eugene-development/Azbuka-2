import { contentGuarantees } from '$lib/data/information/guarantees';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentGuarantees };
}
