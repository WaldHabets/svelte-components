<script context="module" lang="ts">
  export interface Crumb {
    name: string;
    href: string;
  }
</script>
<script lang="ts">
  import { mdiChevronRight } from "@mdi/js";

  /** Styling */
  export let cStyle: string | null = null;
  export let cClass: string | null = null;
  /** Attributes */
  export let crumbs: Crumb[];

  const head: Crumb[] = crumbs.slice(0, crumbs.length - 1);
  const tail: Crumb = crumbs[crumbs.length - 1];
</script>

<div
  role="menuitem"
  class="breadcrumbs {cClass}"
  style={cStyle}>
  {#each head as crumb}
    <a href="{crumb.href}">
      {crumb.name}
    </a>
    <svg viewBox="0 0 24 24">
      <path d="{mdiChevronRight}" />
    </svg>
  {/each}
  <span class="selected">{tail.name}</span>
</div>