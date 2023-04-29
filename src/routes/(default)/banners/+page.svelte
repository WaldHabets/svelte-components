<script lang="ts">
  import { layout } from "$lib/layout";
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";
  import Tablist from "$lib/tablist.svelte";
  import type Tab from "$lib/tablist.svelte";
  import SimpleContainerHeader from "$lib/simple-container-header.svelte"

  let tabs: Tab[] = [
    {name: "Description", key: "view1"},
    {name: "Demo",        key: "view2"},
    {name: "API",         key: "view3"}
  ]
  let active: Tab = tabs[0];
</script>

<HeaderBar title="Banners" width="small" />
<MenuBar width="small">
  <div style="display: flex; gap: 8px;">
    {#if $layout.mobile}
      <SidebarButton label="Menu" cClass="--medium"/>
    {/if}
    <Tablist {tabs} bind:active={active} cClass="--medium" cStyle="flex-grow: 1;" />
  </div>
</MenuBar>
<div class="centered-page small padded">
  {#if active.key === "view1"}
    <section>
      <h2 class="title-2">Description & Anatomy</h2>
      <p class="paragraph">
        A banner is a container with the purpose of drawing the user's attention
        and communicate important information. It's body is made of the message it
        wants to communicate and might contain an optional title. In some cases
        it might cast consist of a dismiss button or action button.
      </p>
    </section>
    <section>
      <h2 class="title-2">Usage</h2>
    </section>
    <section>
      <h2 class="title-2">Accessibility</h2>
      <p>Banners with the <code>banner--info</code> style should receive the aria
        <code>status</code>-role. Banners with the <code>banner--warn</code> style
        should receive the aria <code>alert</code>-role.
      </p>
    </section>
  {:else if active.key === "view2"}
    <section class="container-wrapper">
      <SimpleContainerHeader title="Info banner" />
      <div class="container">
        <div class="banner--info" role="status">
          <h3 class="banner-title">Optional banner title</h3>
          <p>Body - Info message</p>
        </div>
      </div>
    </section>
    <section class="container-wrapper">
      <SimpleContainerHeader title="Warning banner" />
      <div class="container">
        <div class="banner--warn" role="alert">
          <h3 class="banner-title">Optional banner title</h3>
          <p>Body - Warning message</p>
        </div>
      </div>
    </section>
  {:else}
    <section>
      <h2 class="title-2">Pure HTML</h2>
      <p class="paragraph">
        A banner is made up of a <code>div</code> with the <code>banner</code>,
        <code>banner--info</code>, or <code>banner--warn</code> class. It's
        content goes into the <code>div</code> body. Items with the
        <code>banner-title</code> class will be receive the title style.
      </p>
    </section>
  {/if}
</div>

<style lang="scss">
  @import "../../../assets/style/pt-theme-colours";

  .container-wrapper {
    margin: 16px;
  }
</style>
