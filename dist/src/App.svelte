<script lang="ts">
	import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import ServiceWorker from "./components/ServiceWorker.svelte";
  import { routes } from "./routes";
</script>

<!-- Header -->
<Header />

<!-- Main -->
<main>

  <!-- Router -->
	<Router {routes}/>

</main>

<!-- Service Worker -->
<ServiceWorker />
