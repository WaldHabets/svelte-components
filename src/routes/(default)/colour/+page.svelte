<script lang="ts">
  import {layout} from "$lib/layout";
</script>
<main class="centered-page wide">
  <header class="page-title">
    {#if $layout.mobile}
      <button class="flat-button --small" on:click={() => $layout.sidebar = true}>back</button>
    {/if}
    <h1>Colours</h1>
  </header>
  <header>
    <h2>Colour System</h2>
  </header>
  <header>
    <h2>Themes</h2>
  </header>
  <header>
    <h2>Accents</h2>
    We recommend a couple of different colours for accents.
  </header>
  <section class="container-wrapper">
    <header class="container-header">
      <h3>Blue</h3>
    </header>
    <div class="container" />
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h3>Blue</h3>
    </header>
    <div class="container" />
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h3>Blue</h3>
    </header>
    <div class="container" />
  </section>
</main>
