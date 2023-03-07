<script type="ts">
  import { link } from "svelte-spa-router";
</script>

<header>
  <i class="icofont-ship-alt"></i>
  <a href="/" use:link>Home</a>
  <a href="/about" use:link>About</a>
</header>

<style>
  header {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  header > i {
    font-size: xx-large;
  }
</style>