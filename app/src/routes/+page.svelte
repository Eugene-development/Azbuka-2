
<script>
    // import { onMount } from 'svelte';
    // onMount(() => {
    //   response = request('http://127.0.0.1:8001/graphql/', query);
	// });

// import { request, gql } from 'graphql-request'
//     const query = gql`
//       query all_catalog {
//         catalog {
//             id
//             value
//             is_active
//             created_at
//             updated_at
//             parent: parentable {
//                 ... on Menu {
//                     id
//                     value
//                 }
//             }
//         }
//     }
// `
// let responce;
// const pay = async () => {
//       response = await request('http://127.0.0.1:8001/graphql/', query);
    //   console.log(response);
    //   return response;
//   }
//   pay();
//   export let response;
// export let catalog
// console.log(data);
export let data
// console.log(data.response.catalog[0].value);
console.log(data);

</script>



<h1>Welcome to SvelteKit</h1>
<p class="text-red-800">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- {data.contentTest.content.myTest2} -->

<!-- {data.response.catalog[0].value} -->
<!-- {data.response2.catalog[0].value} -->
<!-- <button on:click={pay}>Calculate</button> -->

{#each data.response2.pokemons as {name}}
    {name}-
{/each}
<!-- {#each data.response2.catalog as {value}}
    {value}-
{/each} -->