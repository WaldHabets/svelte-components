<script lang="ts">
  import type Modal from "./modal"
  /** Transitions */
  import { slide } from 'svelte/transition';
  /** Icons */
  import {mdiClose} from "@mdi/js";
  /** Properties */
  export let title: string = "";
  export let showSheet: boolean = false;

  $: console.log(`updated to ${showSheet}`);

  export const sheet: Modal =
  {
    show(): void {
      showSheet = true;
    },
    showWithData(data: object) {
      showSheet = true;
    },
    hide(): void {
      showSheet = false;
    }
  }
</script>

{#if showSheet}
<div class="option-sheet-backdrop"  on:click|self={sheet.hide} on:keyup>
  <div class="option-sheet centered-page small container dark" transition:slide>
    <header class="option-sheet-header">
      <h1>{title}</h1>
      <button class="flat-button option-sheet-cancel" on:click={sheet.hide}>
        <svg viewBox="0 0 24 24">
          <path d="{mdiClose}" />
        </svg>
      </button>
    </header>
    <div class="option-sheet-content">
      <slot></slot>
    </div>
  </div>
</div>
{/if}

<style lang="scss">
.option-sheet-backdrop {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  //background-color: rgba(0,0,0,0.1);
  z-index: 100001;

  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;

  .option-sheet {
    //background: white;
    //border: 2px solid #bbb;
    border-radius: 8px;
    box-sizing: border-box;
    max-height: calc(100vh - 64px);
    max-width: calc(100vw - 32px);
    width: max-content;
    margin: 32px auto;
    height: min-content;
    padding: 8px;
    box-shadow: 0 0 16px -8px black;

    overflow: hidden;

    .option-sheet-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;

      /** font */
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      line-height: 24px;
      color: var(--pt-text);
      h1 {
        flex-grow: 1;
        margin-left: 40px;
      }
      * {
        color: inherit;
      }
      .option-sheet-cancel {
        width: 32px;
        height: 32px;
        padding: 4px;
        border-radius: 50%;
        border: none;

        &:hover {
          cursor: pointer;
        }

        svg {
          width: 24px;
          height: 24px;
          fill: var(--pt-text);
        }
      }
    }
    .option-sheet-content {
      max-height: calc(100vh - 48px - 56px);
      box-sizing: border-box;
      overflow-y: scroll;
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }
  }
}
</style>