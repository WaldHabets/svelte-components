<script context="module" lang="ts">
  export let prerender = true;
</script>

<script lang="ts">
  /** Icons */
  import { mdiArrowRight, mdiOpenInNew } from "@mdi/js";

  /** events */
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  /** Exports */
  export let outgoing: true | false = false;
  export let iconStart: false | string = false;
  export let iconAriaLabel: string = "";
  export let href: false | string = false;
</script>

<li class="list-item active">
  <a {href}>
    {#if iconStart}
      <div class="label-group">
        <svg viewBox="0 0 24 24" class="icon-start" aria-label="{iconAriaLabel}" >
          <path d={iconStart} />
        </svg>
        <slot />
      </div>
    {:else}
      <slot />
    {/if}
    <svg viewBox="0 0 24 24" class="icon-end" aria-hidden="true">
      <path d={outgoing ? mdiOpenInNew : mdiArrowRight} />
    </svg>
  </a>
</li>

<style lang="scss">
  .list-item.active {
    a {
      color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .label-group {
      display: flex;
      align-items: center;
    }

    .icon-start,
    .icon-end {
      width: 24px;
      height: 24px;
      padding: 4px;
      fill: #6f6f6f;
      flex-shrink: 0;
    }
  }
</style>
