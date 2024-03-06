<script lang="ts">
  import { layout } from "$lib/layout";
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";
  import Tablist from "$lib/tablist.svelte";
  import type Tab from "$lib/tablist.svelte";
  import { mdiCodeBraces, mdiFileDocument, mdiPlay } from "@mdi/js";

  let tabs: Tab[] = [
    {name: "Description", key: "view1", icon: mdiFileDocument},
    {name: "Demo",        key: "view2", icon: mdiPlay},
    {name: "API",         key: "view3", icon: mdiCodeBraces}
  ]
  let active: Tab = tabs[0];

  let example: Tab[] = [
    {name: "First",   key: "view1"},
    {name: "Second",  key: "view2"},
    {name: "Third",   key: "view3"},
    {name: "Fourth",  key: "view4"},
    {name: "Fifth",   key: "view5"}
  ]
</script>

<svelte:head>
  <title>Tablist</title>
</svelte:head>

<HeaderBar title="Tablist" width="small" />
{#if $layout.mobile}
  <MenuBar width="small">
      <SidebarButton label="Menu" cClass="--medium"/>
  </MenuBar>
{/if}
<Tablist {tabs} bind:active={active} cClass="--medium" cStyle="flex-grow: 1;" />
<div class="centered-page small padded">
  {#if active.key === "view1"}
    <section>
      <h2 class="title-2">Description</h2>
    </section>
    <section>
      <h2 class="title-2">Anatomy</h2>
    </section>
    <section>
      <h2 class="title-2">Usage</h2>
    </section>
    <section>
      <h2 class="title-2">Accessibility</h2>
      <p class="paragraph">
        The <code>Tablist</code> implements the aria-role <code>tablist</code>.
        It's buttons implement the aria-role <code>tab</code> and attribute
        <code>aria-selected</code>.
      </p>
      <h3 class="title-3">Keyboard support</h3>
      <dl class="paragraph">
        <dt><kbd>ArrowLeft</kbd> and <kbd>ArrowRight</kbd></dt><dd>Cycle through tabs.</dd>
        <dt><kbd>Home</kbd> and <kbd>End</kbd></dt><dd>Go to the first and last tab.</dd>
        <dt><kbd>Enter</kbd> and <kbd>Space</kbd></dt><dd>Activate selected tab.</dd>
      </dl>
      <div class="banner--warn">
        <h3 class="banner-title">
          Missing accessibility features.
        </h3>
        <ul>
          <li>When focus moves into the tab list, places focus on the active tab element.</li>
          <li>
            When the tab list contains the focus, moves focus to the next
            element in the page tab sequence outside the tablist, which is the
            tabpanel unless the first element containing meaningful content
            inside the tabpanel is focusable.
          </li>
        </ul>
      </div>
    </section>
  {:else if active.key === "view2"}
    <section class="container-wrapper">
      <header class="container-header">
        <h1>This is View 2</h1>
        <p>
          You can add a paragraph that will provide extra information about its
          contents.
        </p>
      </header>
      <div class="container">
        <Tablist tabs={example} cClass="--medium" cStyle="flex-grow: 1;" />
      </div>
    </section>
  {:else}
    <section class="container-wrapper">
      <header class="container-header">
        <h1>This is the header for a container</h1>
        <p>
          You can add a paragraph that will provide extra information about its
          contents.
        </p>
      </header>
      <div class="container" />
    </section>
  {/if}
</div>

<style lang="scss">
  @import "../../../assets/style/pt-theme-colours";

  .container-wrapper {
    margin: 16px;
  }
</style>
