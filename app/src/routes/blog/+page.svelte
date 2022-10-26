<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Blog from '$lib/components/blog/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentBlog} />
<Blog {...data.contentBlog} />
