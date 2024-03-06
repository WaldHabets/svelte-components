


<script lang="ts">
  import {layout} from "$lib/layout";
  import Dialog from "$lib/dialog.svelte";
  import Overlay from "$lib/overlay.svelte";
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";
  import SimpleContainerHeader from "$lib/simple-container-header.svelte";

  let dialog;
  let overlay;
</script>

{#if $layout.mobile}
  <HeaderBar
    title="Containers"
    blurb="Containers are components that logically group other content." width="small"/>
  <MenuBar width="small">
    <SidebarButton label="Menu" cClass="--medium"/>
  </MenuBar>
{:else}
  <HeaderBar
    title="Containers"
    blurb="Containers are components that logically group other content." width="small" standalone/>
{/if}
<div class="centered-page small">
  <section class="container-wrapper">
    <SimpleContainerHeader
      title="Containers"
      blurb="Above you see the title of a container. You can inlcude some small paragraphs to explain the content of such containers. The actual container is below"
    />
    <div class="container">
      <button class="button" on:click={() => dialog.show()}>Open Dialog</button>
      <button class="button" on:click={() => overlay.show()}>Open overlay</button>
    </div>
  </section>
</div>
<Dialog bind:this={dialog}>
  <p slot="content">
    jfeioapfeiofjazeiojezp
  </p>
  <button class="button" slot="buttons">Close</button>
</Dialog>
<Overlay bind:this={overlay}>
  <button class="button" on:click={() => overlay.hide()}>close</button>
</Overlay>

<style lang="scss">

</style>