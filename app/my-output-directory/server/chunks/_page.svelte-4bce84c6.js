import { c as create_ssr_component, d as each, e as escape } from './index-a4bfa9f6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Welcome to SvelteKit</h1>
<p class="${"text-red-800"}">Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>







${each(data.response2.pokemons, ({ name }) => {
    return `${escape(name)}-`;
  })}
`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4bce84c6.js.map
