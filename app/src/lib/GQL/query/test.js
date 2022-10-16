import { gql } from 'graphql-request';

export const ALL_CATALOG = gql`
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
