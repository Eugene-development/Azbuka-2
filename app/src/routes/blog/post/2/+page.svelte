<script>
    import Blog  from "$lib/components/post/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Blog {...data.contentPost}/>