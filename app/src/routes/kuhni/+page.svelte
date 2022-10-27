<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Kuhni from '$lib/components/rubric/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<!-- <svelte:head>
	<title>Кухонные гарнитуры под заказ</title>
	<meta name="description" content="Производим недорогие кухонные гарнитуры" />
</svelte:head> -->

<BreadCrumbs {...data.contentKuhni} />
<Kuhni {...data.contentKuhni} />
