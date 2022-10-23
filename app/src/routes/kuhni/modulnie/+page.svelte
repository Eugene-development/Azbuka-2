<script>
    import KuhniModulnie from "$lib/components/category/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<KuhniModulnie {...data.contentKuhniModulnie}/>