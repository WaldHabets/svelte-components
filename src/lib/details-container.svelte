<div class={"details-container-wrapper container " + bClass}>
  <div class={"summary-container " + bClassSummary}>
    <div class="summary">
      <slot name="summary" />
    </div>
    <button class="expand-button" on:click={clickHandler}>
      <span>{open ? labelCollapse : labelExpand}</span>
      <svg viewBox="0 0 24 24">
        <path d={open ? mdiChevronUp : mdiChevronDown}></path>
      </svg>
    </button>
  </div>
    {#if open}
      <div class={"details-container " + bClassDetails}>
        <div class="details">
          <slot name="details" />
        </div>
        <button class="expand-button" on:click={clickHandler}>
          <span>{labelCollapse}</span>
          <svg viewBox="0 0 24 24">
            <path d={open ? mdiChevronUp : mdiChevronDown}></path>
          </svg>
        </button>
      </div>
    {/if}
</div>

<script lang="ts">
  /** Icons */
  import {mdiChevronDown, mdiChevronUp} from "@mdi/js";
  /** Props */
  export let labelExpand: string = "";
  export let labelCollapse: string = "";
  export let bClass: string = "";
  export let bClassSummary: string = "";
  export let bClassDetails: string = "";

  let open = false;

  function clickHandler() {
    open = !open;
  }
</script>

<style lang="scss">
  .details-container-wrapper {
    padding: 0;
    .summary-container {
      padding: 4px;
      .summary {
        padding: 12px;
      }
    }
    .details-container {
      border-top: 1px solid #bbb;
      background: rgba(black, 0.05);
      padding: 4px;
      .details {
        padding: 12px;
      }
    }
    .expand-button {
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      border: none;
      width: 100%;
      background: none;
      box-sizing: border-box;
      * {
        display: block;
      }
      svg {
        width: 24px;
        height: 24px;
      }
      &:hover {
        background: rgba(black, 0.1);
      }
      &:active {
        background: rgba(black, 0.3);
      }
    }
  }
</style>