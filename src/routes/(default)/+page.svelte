<script lang="ts">
  import { layout } from "$lib/layout"
  /** Components */
  import ListItemActive from "../../lib/list-item-active.svelte";
  import HeaderBar from "$lib/header-bar.svelte";
  /** Icon */
  import { mdiGithub, mdiOpenInNew } from "@mdi/js";
</script>

<HeaderBar
  title="ProperTheme"
  blurb="Documentation for the ProperTheme and LibProper"
  width="small"
  standalone />
<div class="centered-page small">
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
