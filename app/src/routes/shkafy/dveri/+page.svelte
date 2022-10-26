<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import ShkafiDvery from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentShkafiDveri} />
<ShkafiDvery {...data.contentShkafiDveri} />
