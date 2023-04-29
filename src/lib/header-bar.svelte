<script context="module" lang="ts">
  export let prerender = true;
</script>
<script lang="ts">
  export let width: "small" | "wide" = "wide";
  export let title: string = "";
  export let blurb: string | null = null;
  export let standalone: boolean = false;
</script>

<header class="header-bar {standalone ? '--standalone' : ''}">
  <div class="centered-page {width}">
    <h1>{title}</h1>
    {#if blurb}
      <p>{blurb}</p>
    {/if}
  </div>
</header>