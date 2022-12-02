<script lang="ts">
  import type Modal from "./modal";
  /** Transitions */
  import { slide } from "svelte/transition";
  /** Icons */
  import { mdiClose } from "@mdi/js";
  /** Properties */
  export let title: string = "";
  export let showModal: boolean = false;
  export let param: object = null;

  export let cancelAction: string = "";
  export let selectAction: string = "";

  export const modal: Modal = {
    show(): void {
      showModal = true;
    },
    showWithData(data: object) {
      showModal = true;
    },
    hide(): void {
      showModal = false;
    },
  };

  /** events */
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onCancelAction() {
    modal.hide();
    dispatch("cancel", param);
  }
  function onSelectAction() {
    modal.hide();
    dispatch("select", param);
  }
</script>

{#if showModal}
  <div class="option-sheet-backdrop" on:click|self={onCancelAction}>
    <div class="option-sheet" transition:slide>
      <header class="option-sheet-header">
        <h1>{title}</h1>
        <button class="option-sheet-cancel" on:click={onCancelAction}>
          <svg viewBox="0 0 24 24">
            <path d={mdiClose} />
          </svg>
        </button>
      </header>
      <div class="selected" />
      <div class="option-sheet-content">
        <slot />
      </div>
      <div class="option-sheet-buttons">
        <button
          class="option-sheet-button button big"
          on:click={onCancelAction}
        >
          {cancelAction}
        </button>
        <button
          class="option-sheet-button button themed big"
          on:click={onSelectAction}
        >
          {selectAction}
        </button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  $min-button-size: 178px;
  $button-gap: 8px;
  $modal-h-margin: 16px;
  $modal-v-margin: 32px;

  $modal-width: $min-button-size * 3 + $button-gap * 4;
  $threshold-3-buttons: $min-button-size * 3 + $button-gap * 4 + $modal-h-margin *
    2;
  $threshold-2-buttons: $min-button-size * 2 + $button-gap * 3 + $modal-h-margin *
    2;

  .option-sheet-backdrop {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 100001;

    display: flex;
    align-items: center;

    .option-sheet {
      width: calc(100% - $modal-h-margin * 2);

      background: white;
      border: 2px solid #bbb;
      border-radius: 8px;
      box-sizing: border-box;
      max-height: calc(100vh - $modal-v-margin * 2);
      max-width: $modal-width;
      margin: 0 auto;
      height: min-content;
      box-shadow: 0 0 16px -8px black;

      overflow: hidden;

      .option-sheet-header {
        display: flex;
        align-items: center;
        gap: 8px;
        box-sizing: border-box;
        padding: 16px 16px 8px 16px;
        overflow: hidden;

        /** font */
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        h1 {
          flex-grow: 1;
          margin-left: 40px;
        }
        .option-sheet-cancel {
          width: 32px;
          height: 32px;
          padding: 4px;
          border-radius: 50%;
          background: rgba(black, 0.1);
          border: none;

          &:hover {
            background: rgba(black, 0.3);
            cursor: pointer;
          }

          svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
          }
        }
      }
      .option-sheet-content {
        max-height: calc(100vh - 48px - 56px);
        box-sizing: border-box;
        overflow-y: scroll;
        padding: 8px 16px 16px 16px;

        /** font */
        font-size: 16px;
        font-weight: normal;
        line-height: 22px;
        text-align: center;
      }
      .option-sheet-buttons {
        /** border */
        border-top: 2px solid #bbb;
        /** layout */
        display: flex;
        justify-content: space-between;
        padding: $button-gap;
        gap: $button-gap;
        .option-sheet-button {
          flex-grow: 1;
          flex-basis: 0;
        }
        @media screen and (max-width: $threshold-3-buttons) {
          flex-direction: column-reverse;
          .option-sheet-button {
            height: 48px;
            flex-basis: auto;
          }
        }
      }
    }
  }
</style>
