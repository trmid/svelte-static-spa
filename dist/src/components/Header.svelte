<script type="ts">
  import { link } from "svelte-spa-router";
</script>

<header>
  <span id="title">
    <i class="icofont-ship-alt"></i> S.S.S.
  </span>
  <h3>Svelte Static SPA</h3>
  <nav>
    <a href="/" use:link>Getting Started</a>
    <a href="/about" use:link>About</a>
  </nav>
</header>

<style>
  header > #title {
    font-size: xx-large;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }

  header > h3 {
    opacity: 0.6;
  }

  header > nav {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
  }
</style>