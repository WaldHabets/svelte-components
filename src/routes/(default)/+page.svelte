<script lang="ts">
  import { layout } from "$lib/layout"
  /** Components */
  import ListItemActive from "../../lib/list-item-active.svelte";
  /** Icon */
  import { mdiGithub, mdiOpenInNew } from "@mdi/js";
</script>

<div class="centered-page small">
  <header class="page-title">
    {#if $layout.mobile}
      <button class="flat-button --small" on:click={() => $layout.sidebar = true}>back</button>
    {/if}
    <h1>LibVritra</h1>
    <p>Welcome to the LibVritra demo page.</p>
  </header>
  <section class="container-wrapper">
    <header class="container-header"><h1>Link</h1></header>
    <ul class="list-box">
      <ListItemActive
        iconStart={mdiGithub}
        iconEnd={mdiOpenInNew}
        href="https://github.com"
      >
        Github
      </ListItemActive>
    </ul>
  </section>
</div>

<style lang="scss">
</style>
