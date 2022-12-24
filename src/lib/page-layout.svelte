<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { layout } from "./layout";

  /** Components */
  import ListItemLink from "$lib/list-item-link.svelte";

  /** Exports */
  export let backNavigation: false | string = false;
  export let backNavigationLabel: string = "Back";
  export let sidebar: SidebarContent | null = null;

  /** Icons */
  import { mdiArrowLeft, mdiMenu } from "@mdi/js";
  //import { SidebarGroup } from "./sidebar-contents";
  import { type Page } from "@sveltejs/kit";
  import { type Readable } from "svelte/store";
  import type { SidebarContent } from "$lib/sidebar-contents";
  export let page: Readable<Page>;

  /** Locals */
  let sidebarState: "--expanded" | "--collapsed" = "--collapsed";
  let width;
  $: $layout.mobile = width < 780;
  $: formfactor = width > 780 ? "--wide" : "--small";
  $: wide = formfactor === "--wide";
  $: expanded = sidebarState === "--expanded";

  function toggleSidebar(): void {
    $layout.sidebar = !$layout.sidebar;
  }

  function swipeHandler(event) {}
</script>

<div id="page" class="{$layout.mobile ? '--mobile' : '--desktop'}" bind:clientWidth={width}>
  {#if $layout.mobile}
    {#if sidebar && $layout.sidebar}
      <main
        class="grow sidebar"
        transition:fly={{
          x: -width,
          y: 0,
          duration: 600,
          easing: quintOut,
        }}>
        <header class="page-title">
          <div>
            {#if sidebar.back}
              <a href={sidebar.back.href} class="flat-button --compact --flex">
                <svg viewBox="0 0 24 24">
                  <path d={sidebar.back.icon} />
                </svg>
                <span>{sidebar.back.text}</span>
              </a>
            {/if}
            <h1>{sidebar.title}</h1>
          </div>
        </header>
        <nav>
          {#each sidebar.items as sidebarGroup}
            <ul class="sidebar-group">
              {#each sidebarGroup.items as sidebarItem}
                <li
                  title={sidebarItem.text}
                  class={$page.url.pathname === sidebarItem.href
                  ? "active sidebar-item"
                  : "sidebar-item"}
                  on:click={toggleSidebar}
                >
                  <a href={sidebarItem.href}>
                    <svg viewBox="0 0 24 24">
                      <path d={sidebarItem.icon} />
                    </svg>
                    <span>
                    {sidebarItem.text}
                  </span>
                  </a>
                </li>
              {/each}
            </ul>
          {/each}
        </nav>
      </main
      >
    {/if}
    <main class="grow content">
      <slot name="main" />
    </main>
  {:else}
    <div class="sidebar">
      <nav>
        {#if sidebar}
          {#if sidebar.back}
            <div class="standalone-item">
              <a href={sidebar.back.href}>
                <svg viewBox="0 0 24 24">
                  <path d={sidebar.back.icon} />
                </svg>
                <span>
                    {sidebar.back.text}
                  </span>
              </a>
            </div>
          {/if}
        {#each sidebar.items as sidebarGroup}
          <ul class="sidebar-group">
            {#each sidebarGroup.items as sidebarItem}
              <li
                title={sidebarItem.text}
                class={$page.url.pathname === sidebarItem.href
                  ? "active sidebar-item"
                  : "sidebar-item"}
                on:click={toggleSidebar}
              >
                <a href={sidebarItem.href}>
                  <svg viewBox="0 0 24 24">
                    <path d={sidebarItem.icon} />
                  </svg>
                  <span>
                    {sidebarItem.text}
                  </span>
                </a>
              </li>
            {/each}
          </ul>
        {/each}
        {/if}
      </nav>
    </div>
    <main class="content">
      <slot name="main" />
    </main>
  {/if}
</div>

<style lang="scss">
  @use "sass:math";
  @import "../assets/style/pt-theme-colours";

  :root {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-color: #f8f8f8;

    body {
      margin: 0;
      height: 100%;
    }
  }

  $sidebar-w-expanded: 300px;
  $sidebar-w-collapsed: 54px;
  $sidebar-threshold: 780px;
  $header-height: 56px;
  $header-border: 2px;
  $content-height: calc(100vh - $header-height);

  @mixin sidebar-item($padding, $height, $icon-dim) {
      box-sizing: border-box;
      height: $height;
      overflow: hidden;
      margin: 0 $padding;
      a {
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-wrap: nowrap;
        font-weight: bold;
        text-decoration: none;
        color: inherit;
        padding: $padding;

        svg {
          box-sizing: border-box;
          vertical-align: middle;
          flex-shrink: 0;
          color: inherit;
          height: $icon-dim;
          width: $icon-dim;
          padding: 4px;
          margin: 0 4px;
          path {
            fill: currentColor;
          }
        }
        span {
          display: inline-block;
          line-height: $icon-dim;
          font-size: math.div($icon-dim, 2);
          overflow: hidden;
          color: inherit;
        }
      }
      &:hover,
      &.active {
        cursor: pointer;
        color: var(--pt-theme-on-soft);
        background-color: var(--pt-theme-soft);
        border-radius: 32px;
      }
  }
  @mixin sidebar() {
    $padding: 8px;
    $height: 48px;
    $icon-dim: $height - 2 * $padding;
    .sidebar-group {
      list-style: none;
      margin: 0;
      padding: $padding 0;

      &:not(:first-child) {
        border-top: 1px solid var(--pt-border);
      }
      .sidebar-item {
        @include sidebar-item($padding, $height, $icon-dim);
      }
    }
    .standalone-item {
      @include sidebar-item($padding, $height, $icon-dim);
    }
  }

  @mixin page-generic() {
    #nav-back-button {
      $padding-offset: 8px;
      $button-dim: $header-height - 2 * $padding-offset;
      $button-border-width: 2px;
      $button-padding: $padding-offset - $button-border-width;
      $icon-dim: $button-dim - 2 * $padding-offset;

      box-sizing: border-box;
      width: $button-dim;
      height: $button-dim;
      padding: $button-padding;

      background: none;
      border: none;
      border-radius: 8px;

      &:hover {
        background: rgba(black, 0.05);
      }
      &:active {
        background: rgba(black, 0.1);
      }

      svg {
        width: $icon-dim;
        height: $icon-dim;
        fill: var(--pt-text);
      }
    }

    #page-header {
      padding: 8px 16px;
      margin: 0;
    }
  }

  #page {
    background-color: var(--pt-body-bg);
    box-shadow: var(--pt-shadow-container);
    display: grid;
    height: 100vh;
    //grid-template-rows: $header-height $content-height;
    @include page-generic();
    .sidebar {
      background-color: var(--pt-body-bg);
      height: 100%;
      z-index: 100;
      @include sidebar();
    }
    .content {
      overflow-y: scroll;
      background-color: var(--pt-body-bg);
    }

    &.--mobile {
      .sidebar {
        position: absolute;
        height: 100vh;
        width: 100vw;
      }
    }
    &.--desktop {
      grid-template-areas: "sidebar main";
      grid-template-columns: $sidebar-w-expanded auto;
      .sidebar {
        grid-area: sidebar;
        background-color: var(--pt-container-bg);
        border-right: 1px solid var(--pt-border);
        box-shadow: var(--pt-shadow-container);
        @include sidebar();
      }
      .content {
        grid-area: main;
      }
    }


    //&.--small {
    //  grid-template-areas:
    //    "header"
    //    "content";
    //  grid-template-columns: auto;
    //  #page-header {
    //    grid-area: header;
    //    background-color: var(--pt-body-bg);
    //  }
    //  #page-sidebar-container {
    //    width: 100vw;
    //    background-color: rgba(black, 0.3);
    //    position: absolute;
    //    height: 100vh;
    //  }
    //  #page-sidebar {
    //    //grid-area: content;
    //    //border-top: 2px solid #bbb;
    //    border: none;
    //    position: absolute;
    //    box-sizing: border-box;
    //    background-color: var(--pt-body-bg);
    //    max-width: calc(100% - 96px);
    //    width: 100%;
    //    height: 100%;
    //    overflow-y: scroll;
    //    box-shadow: 1px 0 4px -2px;
    //    //padding: 16px;
    //
    //    @include menu();
    //  }
    //  #page-main {
    //    grid-area: content;
    //    //border-top: 2px solid #bbb;
    //  }
    //  @include page-generic();
    //}

    //&.--wide {
    //  grid-template-areas: "sidebar main";
    //  grid-template-columns: $sidebar-w-expanded auto;
    //  #page-header {
    //    display: none;
    //    //grid-area: header;
    //    //background-color: transparent;
    //  }
    //  #page-sidebar {
    //    grid-area: sidebar;
    //    background-color: transparent;
    //
    //    @include sidebar();
    //  }
    //  #page-main {
    //    grid-area: main;
    //    //border-top-left-radius: 16px;
    //    border-left: 2px solid var(--pt-border);
    //    //border-top: 2px solid #bbb;
    //  }
    //  @include page-generic();
    //}
  }
</style>
