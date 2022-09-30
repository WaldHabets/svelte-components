<script lang="ts">
  /** Components */
  import ListItemActive from "../../../lib/list-item-active.svelte";
  /** Icons */
  import { mdiArrowRight, mdiQrcode, mdiOpenInNew, mdiCardMultipleOutline, mdiFormatQuoteClose, mdiDotsVertical } from "@mdi/js";
</script>

<div class="centered-page small">
  <section class="container-wrapper">
    <header class="container-header">
      <h1>This is a list-box with active list-items</h1>
      <p>As you can see a list box is similar to a normal container. Do note that the container should contain noting else but the list items and maybe a control header. The whole box should be interactive and you should use an appropriate icon to hint at the behavour of the element. The example below shows different types that are mixed, but to to avoid this in practice.</p>
    </header>
    <ul class="list-box">
      <ListItemActive iconEnd={mdiArrowRight}>
        Use a right arrow icon when the list item behaves as a link.
      </ListItemActive>
      <ListItemActive iconEnd={mdiOpenInNew}>
        When the content opens in a new tab or window, use the open-in-new icon.
      </ListItemActive>
      <ListItemActive iconEnd={mdiCardMultipleOutline}>
        Use something like card-multiple to indicate the content will open in a modal or dialog.
      </ListItemActive>
      <ListItemActive iconStart={mdiQrcode} iconEnd={mdiCardMultipleOutline}>
        You can also show icons in front of the label that are linked to the actions. This will probably open a qrcode inside a dialog.
      </ListItemActive>
    </ul>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>An example</h1>
    </header>
    <ul class="list-box">
      <ListItemActive iconStart={mdiQrcode} iconEnd={mdiCardMultipleOutline}>
        Show qr-code
      </ListItemActive>
      <ListItemActive iconEnd={mdiArrowRight}>Settings</ListItemActive>
      <ListItemActive iconEnd="{mdiArrowRight}">Profile</ListItemActive>
      <ListItemActive iconEnd="{mdiArrowRight}">Social</ListItemActive>
      <ListItemActive iconStart="{mdiFormatQuoteClose}" iconEnd="{mdiOpenInNew}">Sources</ListItemActive>
    </ul>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>This is a list-box with inactive list-items</h1>
      <p>The list item itself should not have any interaction bounded to it, but it might contain interactive elements.</p>
    </header>
    <ul class="list-box">
      <li class="list-item static">
        <p>This item has some action buttons</p>
        <button class="flat-button list-button">
          <svg viewBox="0 0 24 24">
            <path d="{mdiDotsVertical}" />
          </svg>
        </button>
      </li>
      <li class="list-item">
        <p>In general we prefere flat buttons for lists</p>
        <button class="flat-button">
          <label>Flat button</label>
        </button>
      </li>
      <li class="list-item">Item 3</li>
      <li class="list-item">Item 4</li>
      <li class="list-item">And this is the fifth item.</li>
    </ul>
  </section>
</div>


<style lang="scss">
  @import "../../../assets/style/pt-theme-colours";

  .container-wrapper {
    color: #6f6f6f;
    margin: 16px;
    &:not(:first-of-type) {
      margin-top: 32px;
    }
    .list-item {
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