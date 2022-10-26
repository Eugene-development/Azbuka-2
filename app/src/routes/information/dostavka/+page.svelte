<script>
	import SEO from '$lib/components/seo/index.svelte'
	import Information from '$lib/components/information/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentDelivery}/>
<Information {...data.contentDelivery} />
