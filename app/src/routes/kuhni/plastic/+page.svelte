<script>
    import KuhniPlastic from "$lib/components/category/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<KuhniPlastic {...data.contentKuhniPlastic}/>