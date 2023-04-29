<script context="module" lang="ts">
  export let prerender = true;
</script>

<script lang="ts">
  /** Exports */
  export let iconStart: false | string = false;
  export let iconEnd: false | string = false;
  export let href: false | string = false;
</script>

<li class="list-item active">
  {#if iconStart}
    <div class="label-group">
      <svg viewBox="0 0 24 24" class="icon-start">
        <path d={iconStart} />
      </svg>
      <p>
        <slot />
      </p>
    </div>
  {:else}
    <p>
      <slot />
    </p>
  {/if}
  {#if iconEnd}
    <svg viewBox="0 0 24 24" class="icon-end">
      <path d={iconEnd} />
    </svg>
  {/if}
</li>

<style lang="scss">
  .list-item.active {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: inherit;
      text-decoration: none;
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
