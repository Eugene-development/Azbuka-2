<script>
    import Information from "$lib/components/information/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Information {...data.contentInstallation}/>