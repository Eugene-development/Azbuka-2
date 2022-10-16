import { request } from 'graphql-request';
import { ALL_CATALOG } from '$lib/GQL/query/test.js';
/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const query = ALL_CATALOG;
	const key = import.meta.env.VITE_TOKEN;
	const variables = {
		key
	};
	const response1 = await request('http://127.0.0.1:8001/graphql/', query, variables);
	if (response1) return { response1 };

	throw error(404, 'Not found');
}
