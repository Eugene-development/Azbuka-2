<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Blog from '$lib/components/post/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentPost} />
<Blog {...data.contentPost} />
