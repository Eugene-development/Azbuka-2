import { gql, request } from 'graphql-request';

const myTest1 = "\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u04351";
const myTest2 = "\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u04352";
const content = {
  myTest1,
  myTest2
};
const contentTest = {
  content
};
async function load$1({ data }) {
  console.log(data);
  const response2 = data.response1;
  return { response2, contentTest };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

gql`
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
const POKEMONS = gql`
	query pok {
		pokemons(first: 8) {
			name
		}
	}
`;
async function load() {
  const query = POKEMONS;
  const response1 = await request("https://graphql-pokemon2.vercel.app", query);
  if (response1)
    return { response1 };
  throw error(404, "Not found");
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-4bce84c6.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-deb27f35.js';
const imports = ["_app/immutable/components/pages/_page.svelte-deb27f35.js","_app/immutable/chunks/index-ff38dbb9.js","_app/immutable/modules/pages/_page.js-4a8f358a.js","_app/immutable/chunks/_page-d07c2c83.js"];
const stylesheets = [];

export { component, file, imports, index, _page_server as server, _page as shared, stylesheets };
//# sourceMappingURL=2-19ac685e.js.map
