<script lang="ts">
  /** Components */
  import ListItemActive from "../../lib/list-item-active.svelte";
  /** Icon */
  import { mdiGithub, mdiOpenInNew } from "@mdi/js";
</script>

<div class="centered-page small">
  <section class="container-wrapper">
    <header class="container-header"><h1>Link</h1></header>
    <ul class="list-box">
      <ListItemActive iconStart={mdiGithub} iconEnd={mdiOpenInNew} href="https://github.com">
        Github
      </ListItemActive>
    </ul>
  </section>
</div>

<style lang="scss">
  @import "../../assets/style/pt-centered-page";
  @import "../../assets/style/pt-containers";
  @import "../../assets/style/pt-list";
</style>