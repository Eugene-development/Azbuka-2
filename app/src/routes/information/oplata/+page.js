import { contentPayment } from '$lib/data/information/payment';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentPayment };
}
