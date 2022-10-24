<script>
    import BreadCrumbs from "$lib/components/bread-crumbs/index.svelte"
    import Kuhni from "$lib/components/rubric/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<BreadCrumbs {...data.contentKuhni}/>
<Kuhni {...data.contentKuhni}/>