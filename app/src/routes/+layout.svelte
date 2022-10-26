<script>
	import '../app.css';

	import MobileMenu from '$lib/components/mobile-menu/index.svelte';
	import Header from '$lib/components/header/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	export let data;
</script>

<MobileMenu {...data.contentHeader} />
<Header {...data.contentHeader} />
<slot />
<Footer {...data.contentFooter} />
