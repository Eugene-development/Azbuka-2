<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import ShkafiKupe from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentShkafiKupe} />
<ShkafiKupe {...data.contentShkafiKupe} />
