<script lang="ts">
  import type Modal from "$lib/modal";
  import ModalAction from "../../../lib/modal-action.svelte";
  import ModalAlert from "../../../lib/modal-alert.svelte";
  import DetailsContainer from "$lib/details-container.svelte";

  let modalAlert: Modal;
  let modalDeleteAlert: Modal;
  let modalAction: Modal;

  let modalAlertResult: string = "";
  let modalActionResult: string = "";

  /** icons */
  import {
    mdiDelete,
    mdiContentCopy,
    mdiContentPaste,
    mdiContentCut,
    mdiAlignHorizontalLeft,
    mdiAlignHorizontalCenter,
    mdiAlignHorizontalRight
  } from "@mdi/js";
</script>

<div class="centered-page small">
  <header class="page-title">
    <h1>Containers</h1>
    <p>
      Containers are components that logically group other content.
    </p>
  </header>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Containers</h1>
      <p>Above you see the title of a container. You can inlcude some small paragraphs to explain the content of such containers. The actual container is below</p>
    </header>
    <div class="container">
      <h2>This a container...</h2>
      <p>This is a container, you can put whatever you like in here, as long as its content is logically coherent.</p>
    </div>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Container Toolbars</h1>
      <p>Containers might have toolbars that can affect the content in the container.</p>
    </header>
    <div class="container">

    </div>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Alert Modal</h1>
      <p>This is a alert modal</p>
    </header>
    <div class="container">
      <button
        class="button"
        on:click={modalAlert.show}>
        Open alert modal
      </button>
      <ModalAlert
        title="This is an 'Alert modal'!"
        bind:modal={modalAlert}
        cancelAction="Cancel action"
        negativeAction="Negative action"
        positiveAction="Positive action">
          It should have at most three buttons. These can be a negative action, positive action or cancel action. Labels for each of these actions should be short and descriptive and not contain any imagery.
      </ModalAlert>
    </div>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Action Modal</h1>
      <p>This is a action modal</p>
    </header>
    <div class="container">
      <button
        class="button"
        on:click={modalAction.show}>
        Open action modal
      </button>
      <ModalAction title="This is an 'Action modal'!" bind:sheet={modalAction}>
        <button class="button big square icon">
          <svg viewBox="0 0 24 24">
            <path d="{mdiContentCopy}"/>
          </svg>
        </button>
        <button class="button big square icon">
          <svg viewBox="0 0 24 24">
            <path d="{mdiContentPaste}"/>
          </svg>
        </button>
        <button class="button big square icon">
          <svg viewBox="0 0 24 24">
            <path d="{mdiContentCut}"/>
          </svg>
        </button>
        <div>
          <button class="button big square connect-end icon">
            <svg viewBox="0 0 24 24">
              <path d="{mdiAlignHorizontalLeft}"/>
            </svg>
          </button><!--
          --><button class="button big square connect-start connect-end icon">
            <svg viewBox="0 0 24 24">
              <path d="{mdiAlignHorizontalCenter}"/>
            </svg>
          </button><!--
          --><button class="button big square connect-start icon">
            <svg viewBox="0 0 24 24">
              <path d="{mdiAlignHorizontalRight}"/>
            </svg>
          </button>
        </div>
        <button class="button alert big square icon" on:click={modalDeleteAlert.show}>
          <svg viewBox="0 0 24 24">
            <path d="{mdiDelete}"/>
          </svg>
        </button>
      </ModalAction>
      <ModalAlert
        title="Delete item?"
        bind:modal={modalDeleteAlert}
        cancelAction="Cancel"
        negativeAction="Delete"
        on:negative={() => modalAction.hide()}>
        Are you sure you want to delete the item?
      </ModalAlert>
    </div>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Details</h1>
    </header>
    <DetailsContainer labelExpand="Expand" labelCollapse="Collapse">
      <svelte:fragment slot="summary">
        This is a details container
      </svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </svelte:fragment>
    </DetailsContainer>
  </section>
</div>

<style lang="scss">
</style>