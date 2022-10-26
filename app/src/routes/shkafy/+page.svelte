<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Shkafi from '$lib/components/rubric/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Шкафы купе под заказ</title>
	<meta name="description" content="Производим шкафы купе на заказ" />
</svelte:head>

<BreadCrumbs {...data.contentShkafi} />
<Shkafi {...data.contentShkafi} />
