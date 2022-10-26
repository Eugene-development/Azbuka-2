<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Contacts from '$lib/components/contacts/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentContacts} />
<Contacts {...data.contentContacts} />
