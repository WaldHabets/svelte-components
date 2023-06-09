<script lang="ts">
  export let width: "small" | "wide" = "wide";
</script>

<div class="menu-bar" role="menubar">
  <div class="centered-page {width}">
    <slot />
  </div>
</div>