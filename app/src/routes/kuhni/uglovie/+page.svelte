<script>
    import KuhniUglovie from "$lib/components/category/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<KuhniUglovie {...data.contentKuhniUglovie}/>