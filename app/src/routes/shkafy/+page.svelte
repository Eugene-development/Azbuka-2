<script>
    import Shkafi from "$lib/components/rubric/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Shkafi {...data.contentShkafi}/>