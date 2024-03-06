<script lang="ts">
  /** Id */
  import genID from "$lib/id";
  const id: string = `dialog-${genID()}`;

  let dialog: HTMLDialogElement;

  export function show() {
    dialog.showModal();
  }
  export function hide() {
    dialog.close();
  }
</script>


<dialog {id} bind:this={dialog} on:click|self={hide} class="modal">
  <div class="modal-box">
    <header>
      <h1>Modal title</h1>
    </header>
    <section>
      <slot name="content"></slot>
    </section>
    <footer>
      <slot name="buttons"></slot>
    </footer>
  </div>

</dialog>

<style lang="scss">
  .modal {
    @media (prefers-color-scheme: light) {
      background: rgba(black, 0.2);
      border-color: rgba(black, 0.2);
    }
    @media (prefers-color-scheme: dark) {
      background: rgba(white, 0.2);
      border-color: rgba(white, 0.2);
    }

    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding: 16px;

    .modal-box {
      background: var(--pt-body-bg);
      width: 100%;
      max-width: 480px;
      margin: auto;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--pt-border);

      & > header {
        padding: 16px 8px 8px 8px;
        border-bottom: 1px solid var(--pt-border);
        color: var(--pt-text);
      }
      & > section {
        padding: 8px;
        color: var(--pt-text);
      }
      & > footer {
        background: var(--pt-container-bg);
        padding: 8px;
        border-top: 2px solid var(--pt-border);
      }
    }
  }
</style>