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
  export let ariaLabel: string = "breadcrumb navigation"

  const head: Crumb[] = crumbs.slice(0, crumbs.length - 1);
  const tail: Crumb = crumbs[crumbs.length - 1];
</script>

<nav
  class="breadcrumbs {cClass}"
  style={cStyle}
  aria-label="{ariaLabel}">
  {#each head as crumb}
    <a href="{crumb.href}">
      {crumb.name}
    </a>
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="{mdiChevronRight}" />
    </svg>
  {/each}
  <span class="selected">{tail.name}</span>
</nav>