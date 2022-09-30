<script lang="ts">
  /** Layout */
  import PageLayout from "../../../lib/page-layout.svelte";
  /** Sidebar */
  import SidebarGroup from "../../../lib/sidebar-group.svelte";
  import SidebarTab from "../../../lib/sidebar-tab.svelte";
  /** Icons */
  import {
    mdiClipboardAccountOutline, mdiHomeOutline,
    mdiTextBoxMultipleOutline
  } from "@mdi/js";
</script>

<PageLayout backNavigation="/">
  <svelte:fragment slot="sidebar-nav">
      <SidebarGroup>
        <SidebarTab icon={mdiHomeOutline} href="/" title="Home">Tab 1</SidebarTab>
        <SidebarTab icon={mdiTextBoxMultipleOutline} href="/#" title="Section 1">Tab 2</SidebarTab>
        <SidebarTab icon={mdiClipboardAccountOutline} href="/#" title="Section 2">Tab 3</SidebarTab>
      </SidebarGroup>
  </svelte:fragment>
  <slot slot="main"></slot>
</PageLayout>

<style lang="scss">
  :root {
    body {
      height: 100%;
    }
  }
</style>