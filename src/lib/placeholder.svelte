<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  export let icon: string;
  export let text: string;
</script>

<div class="placeholder">
  <svg viewBox="0 0 24 24">
    <path d={icon} />
  </svg>
  <p>{text}</p>
</div>

<style lang="scss">
  .placeholder {
    color: var(--pt-text);
    opacity: 0.4;
    svg {
      display: block;
      color: inherit;
      max-width: 512px;
      max-height: 256px;
      width: 100%;
      margin: auto;
      fill: currentColor;
    }
    p {
      color: inherit;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>
