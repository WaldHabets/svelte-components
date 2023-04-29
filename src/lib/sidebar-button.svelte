<script lang="ts">
  import {layout} from "$lib/layout";
  import { mdiMenu } from "@mdi/js";

  export let cStyle: string | null = null;
  export let cClass: string | null = null;

  export let label: string;
</script>

<button
  role="menuitem"
  class="flat-button --flex {cClass}"
  style={cStyle}
  on:click={() => $layout.sidebar = true}>
  <svg viewBox="0 0 24 24">
    <path d="{mdiMenu}" />
  </svg>
  {label}
</button>