
<script>
  import "../app.css";
  import Header from "./header/index.svelte"
  import Footer from "./footer/index.svelte"
  export let data
  // console.log(data);
</script>

<Header />
  <slot />
<Footer {...data.contentFooter}/>