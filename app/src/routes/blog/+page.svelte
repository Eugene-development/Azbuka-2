<script>
	import SEO from '$lib/components/seo/index.svelte'
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Blog from '$lib/components/blog/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentBlog}/>
<BreadCrumbs {...data.contentBlog} />
<Blog {...data.contentBlog} />
