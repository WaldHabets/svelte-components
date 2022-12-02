<script lang="ts">
  /** Icons */
  import { mdiMagnify } from "@mdi/js";
</script>

<header class="search-wrapper">
  <form class="search-bar centered-page small">
    <input
      class="text-input connect-end medium"
      id="input-search"
      placeholder="Search"
    /><!--
        --><button
      class="button connect-start default-size icon medium"
    >
      <svg viewBox="0 0 24 24">
        <path d={mdiMagnify} />
      </svg>
    </button>
  </form>
</header>

<style lang="scss">
  .search-wrapper {
    padding: 16px;
    background: #e5e5e5;
    .search-bar {
      display: flex;
      justify-content: center;
      input {
        flex-grow: 1;
      }
    }
  }
</style>
