
<script>
    import Blog  from "$lib/components/blog/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Blog {...data.contentBlog}/>