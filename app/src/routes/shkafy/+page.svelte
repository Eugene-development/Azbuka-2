<script>
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import Shkafi from '$lib/components/rubric/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<BreadCrumbs {...data.contentShkafi} />
<Shkafi {...data.contentShkafi} />
