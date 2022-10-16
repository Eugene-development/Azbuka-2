import { request, gql } from 'graphql-request';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const query = gql`
		query all_catalog($key: String!) {
			catalog(key: $key) {
				id
				value
				is_active
				created_at
				updated_at
				parent: parentable {
					... on Menu {
						id
						value
					}
				}
			}
		}
	`;
	const variables = {
		key: '1'
	};
	const response1 = await request('http://127.0.0.1:8001/graphql/', query, variables);
	// console.log(response);
	if (response1) return { response1 };

	throw error(404, 'Not found');
}
