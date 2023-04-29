<script lang="ts">
  import { layout } from "$lib/layout";
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";
  import SimpleContainerHeader from "$lib/simple-container-header.svelte";

  import Tablist from "$lib/tablist.svelte";
  import type Tab from "$lib/tablist.svelte";
  let tabs: Tab[] = [
    {name: "Description", key: "view1"},
    {name: "Demo",        key: "view2"},
    {name: "API",         key: "view3"}
  ]
  let active: Tab = tabs[0];

  import Breadcrumbs from "$lib/breadcrumbs.svelte";
  import type Crumb from "$lib/breadcrumbs.svelte";
  let crumbs: Crumb[] = [
    {name: "Link 1", href: "#"},
    {name: "Link 2", href: "#"},
    {name: "Link 3", href: "#"}
  ]
</script>

<svelte:head>
  <title>Breadcrumbs</title>
</svelte:head>

<HeaderBar title="Breadcrumbs" width="small" />
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
    <section>
      <h2>Description</h2>
      <p>Breadcrumbs provide a way to navigate</p>
    </section>
    <section>
      <h2>Constraints</h2>
      <p>The Breadcrumbs must be contained in a menubar.</p>
    </section>
  {:else if active.key === "view2"}
    <section class="container-wrapper">
      <SimpleContainerHeader title="Example"/>
      <div class="container">
        <Breadcrumbs {crumbs} />
      </div>
    </section>
  {:else}
  {/if}
</div>

<style>
    .centered-page {
        padding: 16px;
    }
</style>

