<script lang="ts">
  export let width: "small" | "wide" | "none" = "wide";
  export let title: string = "";
  export let blurb: string | null = null;
  export let raised: boolean = false;
</script>

<header class="{raised ? 'header-bar-raised' : 'header-bar'}">
  <div class="centering-{width}">
    <h1>{title}</h1>
    {#if blurb}
      <p>{blurb}</p>
    {/if}
  </div>
</header>