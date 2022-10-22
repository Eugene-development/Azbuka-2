import { contentMeasurement } from '$lib/data/information/measurement';
/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentMeasurement };
}
