<script context="module" lang="ts">
  export let prerender = true;
  export let ssr = true;
</script>
<script lang="ts">
  export let title: string = "";
  export let blurb: string | null = null;
</script>

<header class="container-header">
  <h2>{title}</h2>
  {#if blurb}
    <p>{blurb}</p>
  {/if}
</header>