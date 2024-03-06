<script lang="ts">
  /** Id */
  import genID from "$lib/id";
  const id: string = `overlay-${genID()}`;

  let dialog: HTMLDialogElement;

  export function show() {
    dialog.showModal();
  }
  export function hide() {
    dialog.close();
  }
</script>

<dialog {id} bind:this={dialog} class="overlay">
  <slot></slot>
</dialog>

<style lang="scss">
  .overlay {
    background: var(--pt-body-bg);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    border-color: var(--pt-body-bg);
  }
</style>