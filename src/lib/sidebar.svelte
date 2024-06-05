<script lang="ts">
  import { type SidebarContent } from "$lib/sidebar-contents";
  export let content: SidebarContent | null = null;

  export let detached: boolean = false;

  import { type Page } from "@sveltejs/kit";
  import { type Readable } from "svelte/store";
  export let page: Readable<Page>;

  import { layout } from "$lib/layout";
  import { mdiClose } from "@mdi/js";

  function hide(): void {
    $layout.sidebar = false;
  }
</script>

<nav class="sidebar">
  {#if detached}
    <div class="detached-header">
      <p>{content.title}</p>
      <button class="button --flex --medium" on:click={hide} on:keyup>
        <svg viewBox="0 0 24 24">
          <path d="{mdiClose}"/>
        </svg>
        <span>close</span>
      </button>
    </div>
  {/if}
  {#each content.items as sidebarGroup}
    {#if sidebarGroup.name}
      <p class="sidebar-group-title">{sidebarGroup.name}</p>
    {/if}
    <ul class="sidebar-group-items">
      {#each sidebarGroup.items as sidebarItem}
        <li
          title={sidebarItem.text}
          class={$page.url.pathname === sidebarItem.href
                  ? "active sidebar-item"
                  : "sidebar-item"}
          on:click={hide}
          on:keyup
        >
          <a href={sidebarItem.href}>
            <svg viewBox="0 0 24 24">
              <path d={sidebarItem.icon} />
            </svg>
            <span>{sidebarItem.text}</span>
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</nav>

<style lang="scss">
  @use "sass:math";
  $header-height: 56px;
  $header-border: 2px;
  $content-height: calc(100vh - $header-height);

  @mixin sidebar-item($padding, $height, $icon-dim) {
    box-sizing: border-box;
    height: $height;
    overflow: hidden;
    margin: 0;
    &:not(:first-child) {
      margin-top: 8px;
    }
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
      &:focus {
        outline: none ;
      }
      &:hover,
      &:focus-visible{
        color: var(--pt-text);
        background-color: var(--pt-flat-control-bg);
        border-radius: 8px;
      }
    }
    &.active {
      cursor: pointer;
      a {
        color: var(--pt-text);
        background-color: var(--pt-flat-control-bg);
        border-radius: 8px;
      }
    }
  }

  .sidebar {
    $padding: 8px;
    $height: 48px;
    $icon-dim: $height - 2 * $padding;

    background-color: var(--pt-container-bg-highlight);
    border-right: 1px solid var(--pt-border);
    height: 100vh;
    z-index: 100;
    box-sizing: border-box;
    padding: 8px;

    overflow-y: scroll;

    .detached-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $padding $padding*2;

      p {
        font-size: 2rem;
      }
    }

    .sidebar-group-title {
      font-size: 1.125rem;
      font-weight: bold;
      color: var(--pt-text);
      margin-top: 16px;
      margin-bottom: 4px;
      margin-inline: 16px;
    }
    .sidebar-group-items {
      list-style: none;
      margin: 0;
      padding: $padding 0;

      &:not(:last-child) {
        border-bottom: 1px solid var(--pt-border);
      }
      .sidebar-item {
        @include sidebar-item($padding, $height, $icon-dim);
      }
    }
  }
</style>