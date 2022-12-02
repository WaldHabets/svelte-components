<script lang="ts">
  /** Transitions */
  import { slide } from "svelte/transition";

  type views = "view1" | "view2" | "view3" | "view4" | "view5";
  let activeView: views = "view1";

  function setView(view: views): void {
    activeView = view;
  }
</script>

<div class="tablist-wrapper centered-page small">
  <div class="tablist light" role="tablist">
    <button
      role="tab"
      class={activeView === "view1" ? "selected" : ""}
      on:click={() => setView("view1")}>View 1</button
    >
    <button
      role="tab"
      class={activeView === "view2" ? "selected" : ""}
      on:click={() => setView("view2")}>View 2</button
    >
    <button
      role="tab"
      class={activeView === "view3" ? "selected" : ""}
      on:click={() => setView("view3")}>View 3</button
    >
    <button
      role="tab"
      class={activeView === "view4" ? "selected" : ""}
      on:click={() => setView("view4")}>View 4</button
    >
    <button
      role="tab"
      class={activeView === "view5" ? "selected" : ""}
      on:click={() => setView("view5")}>View 5</button
    >
  </div>
</div>
<div class="centered-page small">
  {#if activeView === "view1"}
    <section class="container-wrapper">
      <header class="container-header">
        <h1>This is View 1</h1>
        <p>
          You can add a paragraph that will provide extra information about its
          contents.
        </p>
      </header>
      <div class="container" />
    </section>
  {:else if activeView === "view2"}
    <section class="container-wrapper">
      <header class="container-header">
        <h1>This is View 2</h1>
        <p>
          You can add a paragraph that will provide extra information about its
          contents.
        </p>
      </header>
      <div class="container" />
    </section>
  {:else if activeView === "view3"}
    <section class="container-wrapper">
      <header class="container-header">
        <h1>This is the header for a container</h1>
        <p>
          You can add a paragraph that will provide extra information about its
          contents.
        </p>
      </header>
      <div class="container" />
    </section>
  {:else if activeView === "view4"}
    <section class="container-wrapper">
      <header class="container-header">
        <h1>This is the header for a container</h1>
        <p>
          You can add a paragraph that will provide extra information about its
          contents.
        </p>
      </header>
      <div class="container" />
    </section>
  {:else}
    <section class="container-wrapper">
      <header class="container-header">
        <h1>This is the header for a container</h1>
        <p>
          You can add a paragraph that will provide extra information about its
          contents.
        </p>
      </header>
      <div class="container" />
    </section>
  {/if}
</div>

<style lang="scss">
  @import "../../../assets/style/pt-theme-colours";

  .tablist-wrapper {
    margin-top: 16px;
    width: calc(100% - 32px);
  }

  .container-wrapper {
    margin: 16px;
  }
</style>
