<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  /** events */
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  import { page } from "$app/stores";

  export let icon: string;
  export let href: string;
  export let title: string;

  $: active = $page.url.pathname === href;

  function notify(): void {
    dispatch("nav");
  }
</script>

<li {title} class={active ? "active" : ""}>
  <a {href} on:click>
    <svg viewBox="0 0 24 24">
      <path d={icon} />
    </svg>
    <span>
      {title}
    </span>
  </a>
</li>

<style lang="scss">
  @use "sass:math";
  @import "../assets/style/pt-theme-colours";

  $padding: 8px;
  $height: 48px;
  $icon-dim: $height - 2 * $padding;

  li {
    box-sizing: border-box;
    height: $height;
    overflow: hidden;
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

      &:focus-visible {
        outline: 3px solid var(--pt-theme-primary);
      }
    }

    &:hover,
    &.active {
      cursor: pointer;
      color: var(--pt-theme-on-soft);
      background-color: var(--pt-theme-soft);
      border-radius: 32px;
    }

    &.expanded {
      display: inline;
    }
    &.collapsed {
      display: none;
    }
  }
  :global(.collapsed) {
    li {
      a {
        span {
          display: none;
        }
      }
    }
  }
</style>
