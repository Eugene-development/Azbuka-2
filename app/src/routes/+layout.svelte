
<script>
  import "../app.css";
  import Header from "./header/index.svelte"
  import Footer from "./footer/index.svelte"
  export let data
</script>

<Header {...data.contentHeader}/>
  <slot />
<Footer {...data.contentFooter}/>