<script context="module" lang="ts">
  export interface TabPages {
    view1: object;
    view2: object;
    view3: object;
  }
</script>
<script lang="ts">
  import {layout} from "$lib/layout";
  /** Components */
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";
  import Tablist from "$lib/tablist.svelte"
  import Tab from "$lib/tablist.svelte";

  let tabs: Tab[] = [
    {name: "Description", key: "view1"},
    {name: "Demo",        key: "view2"},
    {name: "API",         key: "view3"}
  ]
  let active: Tab = tabs[0];

  export let title: string = "";
  export let pages: TabPages;

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<HeaderBar {title} width="small" />
<MenuBar width="small">
  <div style="display: flex; gap: 8px;">
    {#if $layout.mobile}
      <SidebarButton label="Menu" cClass="--medium"/>
    {/if}
    <Tablist {tabs} bind:active={active} cClass="--medium" cStyle="flex-grow: 1;" />
  </div>
</MenuBar>
<div class="centered-page small">
  <svelte:component this="{pages[active.key]}" />
</div>