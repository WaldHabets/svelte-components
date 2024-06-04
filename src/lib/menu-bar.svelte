<script lang="ts">
  export let width: "small" | "wide" | "none" = "wide";
  export let ariaLabel: string = "menubar";
</script>

<section class="menu-bar" aria-label="{ariaLabel}">
  <div class="centering-{width}">
    <slot />
  </div>
</section>