<script lang="ts">
  /** Layout */
  import PageLayout from "../../../lib/page-layout.svelte";
  /** Icons */
  import {
    mdiClipboardAccountOutline,
    mdiHomeOutline,
    mdiTextBoxMultipleOutline,
  } from "@mdi/js";
</script>

<PageLayout backNavigation="/">
  <slot slot="main" />
</PageLayout>

<style lang="scss">
  :root {
    body {
      height: 100%;
    }
  }
</style>
