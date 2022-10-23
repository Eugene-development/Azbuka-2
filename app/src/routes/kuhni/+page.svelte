<script>
    import Kuhni from "$lib/components/rubric/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Kuhni {...data.contentKuhni}/>