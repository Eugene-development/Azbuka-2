<script>
	import Main from '$lib/components/main/index.svelte';
	import Benefits from '$lib/components/benefits/index.svelte';
	import Cooperation from '$lib/components/cooperation/index.svelte';
	import Blog from '$lib/components/blog/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

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

	// console.log(data.response.catalog[0].value);
	// console.log(data);

	// export let data
</script>

<!-- {data.contentTest.content.myTest2} -->

<!-- {data.response.catalog[0].value} -->
<!-- {data.response2.catalog[0].value} -->
<!-- <button on:click={pay}>Calculate</button> -->

<!-- {#each data.response2.pokemons as {name}}
    {name}-
{/each} -->
<!-- {#each data.response2.catalog as {value}}
    {value}-
{/each} -->

<svelte:head>
	<title>Шкафы купе и кухонные гарнитуры под заказ</title>
	<meta name="description" content="Производим шкафы купе на заказ и недорогие кухонные гарнитуры" />
</svelte:head>
<Main {...data.contentMain} />
<Benefits {...data.contentBenefits} />
<Cooperation {...data.contentCooperation} />
<Blog {...data.contentBlog} />

<!-- {#each data.data.test888.rubric as {value}}
    {value}
{/each} -->