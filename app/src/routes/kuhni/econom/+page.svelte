<script>
    import KuhniEconom from "$lib/components/category/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<KuhniEconom {...data.contentKuhniEconom}/>