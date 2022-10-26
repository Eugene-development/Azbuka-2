<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import KuhniPlastic from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentKuhniPlastic} />
<KuhniPlastic {...data.contentKuhniPlastic} />
