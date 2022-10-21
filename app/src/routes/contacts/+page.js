import { contentContacts } from '$lib/data/contacts/index';

/** @type {import('./$types').PageLoad} */
export async function load() {
	return { contentContacts };
}
