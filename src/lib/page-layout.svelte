<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { layout } from "./layout";
  import Sidebar from "$lib/sidebar.svelte";

  /** Exports */
  import type { SidebarContent } from "$lib/sidebar-contents";
  export let sidebar: SidebarContent | null = null;

  import { type Page } from "@sveltejs/kit";
  import { type Readable } from "svelte/store";

  export let page: Readable<Page>;

  /** Locals */
  let sidebarState: "--expanded" | "--collapsed" = "--collapsed";
  let width;
  $: $layout.mobile = width < 780;
  $: expanded = sidebarState === "--expanded";

  function toggleSidebar(): void {
    $layout.sidebar = !$layout.sidebar;
  }
  function onKeyEvent(e: KeyboardEvent): void {
    if (sidebar && e.key === "Escape") {
      $layout.sidebar = false;
      e.preventDefault();
    }
  }
</script>

<svelte:window on:keydown={onKeyEvent} />
<div id="page" class="{$layout.mobile ? '--mobile' : '--desktop'}" bind:clientWidth={width}>
  {#if $layout.mobile}
    {#if sidebar && $layout.sidebar}
      <div class="backdrop"
        on:click|self={toggleSidebar}>
        <div
          role="dialog"
          aria-modal="true"
          class="sidebar"
          transition:fly={{
            x: -width,
            y: 0,
            duration: 600,
            easing: quintOut,
          }}>
          <Sidebar content={sidebar} {page} detached/>
        </div>
      </div>
    {/if}
  {:else}
    <div class="sidebar">
        {#if sidebar}
          <Sidebar content={sidebar} {page} />
        {/if}
    </div>
  {/if}
  <main class="content">
    <slot name="main" />
  </main>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../assets/style/pt-theme-colours";

  $sidebar-w-expanded: 300px;

  //:root {
  //  padding: 0;
  //  margin: 0;
  //  min-height: 100vh;
  //  background-color: #f8f8f8;
  //
  //  body {
  //    margin: 0;
  //    height: 100%;
  //  }
  //}

  #page {
    background-color: var(--pt-body-bg);
    box-shadow: var(--pt-shadow-container);
    display: grid;
    height: 100vh;
    //grid-template-rows: $header-height $content-height;
    .content {
      overflow-y: scroll;
      background-color: var(--pt-body-bg);
    }

    &.--mobile {
      .backdrop {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: 100;
        background-color: rgba(black, 0.4);
        .sidebar {
          height: 100vh;
          width: 80vw;
        }
      }

    }
    &.--desktop {
      grid-template-areas: "sidebar main";
      grid-template-columns: $sidebar-w-expanded auto;
      .sidebar {
        grid-area: sidebar;
      }
      .content {
        grid-area: main;
      }
    }
  }
</style>
