<script>
    import KuhniMDF from "$lib/components/category/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<KuhniMDF {...data.contentKuhniMDF}/>