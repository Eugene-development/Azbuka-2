<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import ShkafiOfisnie from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentShkafiOfisnie} />
<ShkafiOfisnie {...data.contentShkafiOfisnie} />
