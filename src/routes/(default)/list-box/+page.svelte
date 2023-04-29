<script lang="ts">
  import {layout} from "$lib/layout";
  /** Components */
  import ListItemActive from "../../../lib/list-item-active.svelte";
  import ModalAction from "../../../lib/modal-action.svelte";
  import ModalAlert from "../../../lib/modal-alert.svelte";
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";
  import Tablist from "$lib/tablist.svelte";
  import type Tab from "$lib/tablist.svelte";
  import SimpleContainerHeader from "$lib/simple-container-header.svelte"
  /** Icons */
  import {
    mdiArrowRight,
    mdiQrcode,
    mdiOpenInNew,
    mdiCardMultipleOutline,
    mdiFormatQuoteClose,
    mdiDotsVertical,
  } from "@mdi/js";

  const tabs: Tab[] = [
    {name: "Description", key: "view1"},
    {name: "Demo",        key: "view2"},
    {name: "API",         key: "view3"}
  ]

  let active: Tab = tabs[0];
  let sheet;
  let modal;
  let showSheet: boolean = true;
  function toggle() {
    showSheet = true;
    console.log(showSheet);
  }
  $: console.log(`showSheet is ${showSheet}`);
</script>

<HeaderBar title="List Box" width="small" />
<MenuBar width="small">
  <div style="display: flex; gap: 8px;">
    {#if $layout.mobile}
      <SidebarButton label="Menu" cClass="--medium"/>
    {/if}
    <Tablist {tabs} bind:active={active} cClass="--medium" cStyle="flex-grow: 1;" />
  </div>
</MenuBar>
<div class="centered-page small">
  {#if active.key === "view1"}
    <section>
      <h2>Description</h2>
        <p>
          As you can see a list box is similar to a normal container. Do note that
          the container should contain noting else but the list items and maybe a
          control header. The whole box should be interactive and you should use
          an appropriate icon to hint at the behavour of the element. The example
          below shows different types that are mixed, but to to avoid this in
          practice.
        </p>
        <p>
          Use a right arrow icon when the list item behaves as a link.
        </p>
        <p>
          When the content opens in a new tab or window, use the open-in-new icon.
        </p>
        <p>
          Use something like card-multiple to indicate the content will open in a
          modal or dialog.
        </p>
        <p>
          You can also show icons in front of the label that are linked to the
          actions. This will probably open a qrcode inside a dialog.
        </p>
    </section>
  {:else if active.key === "view2"}
    <section class="container-wrapper">
      <SimpleContainerHeader title="A list-box with active items." />
      <ul class="list-box">
        <ListItemActive iconStart={mdiQrcode} iconEnd={mdiCardMultipleOutline}>
          Show qr-code
        </ListItemActive>
        <ListItemActive iconEnd={mdiArrowRight}>Settings</ListItemActive>
        <ListItemActive iconEnd={mdiArrowRight}>Profile</ListItemActive>
        <ListItemActive iconEnd={mdiArrowRight}>Social</ListItemActive>
        <ListItemActive iconStart={mdiFormatQuoteClose} iconEnd={mdiOpenInNew}
        >Sources</ListItemActive
        >
      </ul>
    </section>
    <section class="container-wrapper">
      <SimpleContainerHeader title="A list-box with inactive items." />
      <ul class="list-box">
        <li class="list-item static">
          <div class="flex-row">
            <p>This item has some action buttons</p>
            <button class="button list-button" on:click={sheet.show}>
              <svg viewBox="0 0 24 24">
                <path d={mdiDotsVertical} />
              </svg>
            </button>
          </div>
          <ModalAction title="This item has some action buttons" bind:sheet>
            <button class="flat-button big"> delete </button>
            <button class="flat-button big square" />
          </ModalAction>
        </li>
        <li class="list-item flex-row">
          <p>In general we prefere flat buttons for lists</p>
          <button class="button" on:click={modal.show}>
            <label>Flat button</label>
          </button>
          <ModalAlert
            title="This is a modal"
            bind:modal
            cancelAction="Cancel action"
            negativeAction="Negative action"
            positiveAction="Positive action"
          >
            <svelte:fragment slot="content">
              It should have at most three buttons. These can be a negative
              action, positive action or cancel action. Labels for each of these
              actions should be short and descriptive and not contain any imagery.
            </svelte:fragment>
          </ModalAlert>
        </li>
        <li class="list-item split-row">
          <div class="content flex-row">
            <p>This button has a combination</p>
            <button class="button" on:click={sheet.show}> Open </button>
          </div>
          <button class="button list-button" on:click={sheet.show}>
            <svg viewBox="0 0 24 24">
              <path d={mdiDotsVertical} />
            </svg>
          </button>
        </li>
        <li class="list-item flex-row">Item 4</li>
        <li class="list-item flex-row">And this is the fifth item.</li>
      </ul>
    </section>
  {:else}
  {/if}
</div>

<style lang="scss">
  @import "../../../assets/style/pt-theme-colours";

  .container-wrapper {
    color: #6f6f6f;
    margin: 16px;
    &:not(:first-of-type) {
      margin-top: 32px;
    }
    .split-row {
      display: flex;
      align-items: center;
      .content {
        flex-grow: 1;
        border-right: 1px solid #bbb;
        padding-right: 8px;
        margin-right: 8px;
      }
    }
    .flex-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .list-item-active-icon {
      width: 24px;
      height: 24px;
      padding: 4px;
      fill: #6f6f6f;
      flex-shrink: 0;
    }
    .icon-label {
      display: flex;
      align-items: center;
    }
    .list-button {
      width: 40px;
      height: 40px;
      padding: 6px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
