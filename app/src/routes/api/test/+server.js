import { request, gql } from 'graphql-request';

/** @type {import('./$types').PageServerLoad} */
export async function GET() {
	const query = gql`
		query all_catalog {
			catalog {
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
	const response3 = await request('http://127.0.0.1:8001/graphql/', query);
	// console.log(response3);
	return new Response(String(response3));

	// throw error(404, 'Not found');
}
