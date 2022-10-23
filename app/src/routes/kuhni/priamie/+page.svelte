<script>
    import KuhniPriamie from "$lib/components/category/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<KuhniPriamie {...data.contentKuhniPriamie}/>