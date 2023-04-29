<script lang="ts">
  import { layout } from "$lib/layout";
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";
  import Tablist from "$lib/tablist.svelte";
  import type Tab from "$lib/tablist.svelte";

  let tabs: Tab[] = [
    {name: "Description", key: "view1"},
    {name: "Demo",        key: "view2"},
    {name: "API",         key: "view3"}
  ]
  let active: Tab = tabs[0];
</script>

<HeaderBar title="Sidebar Button" width="small" />
<MenuBar width="small">
  <div style="display: flex; gap: 8px;">
    {#if $layout.mobile}
      <SidebarButton label="Menu" cClass="--medium"/>
    {/if}
    <Tablist {tabs} bind:active={active} cClass="--medium" cStyle="flex-grow: 1;" />
  </div>
</MenuBar>
<div class="centered-page small">
  {#if active.key === "view1"}
    <h2>Constraints</h2>
    The SidebarButton must be contained in a menubar.
  {:else if active.key === "view2"}
  {:else}
  {/if}
</div>

<style>
  .centered-page {
      padding: 16px;
  }
</style>
