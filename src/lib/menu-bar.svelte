<script lang="ts">
  export let width: "small" | "wide" = "wide";
  export let ariaLabel: string = "menubar";
</script>

<section class="menu-bar" aria-label="{ariaLabel}">
  <div class="centered-page {width}">
    <slot />
  </div>
</section>