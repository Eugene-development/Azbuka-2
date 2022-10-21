<script>
    import Contacts from "$lib/components/contacts/index.svelte"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Contacts {...data.contentContacts}/>
