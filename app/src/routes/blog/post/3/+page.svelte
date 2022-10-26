<script>
	import SEO from '$lib/components/seo/index.svelte'
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Blog from '$lib/components/post/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentPost} />
<BreadCrumbs {...data.contentPost} />
<Blog {...data.contentPost} />
