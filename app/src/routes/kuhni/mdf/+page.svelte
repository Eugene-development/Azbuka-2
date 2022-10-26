<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import KuhniMDF from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentKuhniMDF} />
<KuhniMDF {...data.contentKuhniMDF} />
