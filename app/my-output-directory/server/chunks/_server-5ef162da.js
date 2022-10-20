import { gql, request } from 'graphql-request';

async function GET() {
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
  const response3 = await request("http://127.0.0.1:8001/graphql/", query);
  return new Response(String(response3));
}

export { GET };
//# sourceMappingURL=_server-5ef162da.js.map
