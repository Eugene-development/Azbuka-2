import { contentDelivery } from '$lib/data/information/delivery';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentDelivery };
}
