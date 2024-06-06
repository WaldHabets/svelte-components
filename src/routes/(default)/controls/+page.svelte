<script lang="ts">
  import {layout} from "$lib/layout";
  /** Components */
  import Breadcrumbs from "$lib/breadcrumbs.svelte";
  import HeaderBar from "$lib/header-bar.svelte";
  import MenuBar from "$lib/menu-bar.svelte";
  import SidebarButton from "$lib/sidebar-button.svelte";

  /** Icons */
  import { mdiDotsVertical } from "@mdi/js";
</script>

<svelte:head>
  <title>Controls</title>
</svelte:head>

{#if $layout.mobile}
  <HeaderBar title="Controls" blurb="Various control elements" width="small"/>
  <MenuBar width="small">
    <SidebarButton label="Menu" cClass="--medium"/>
  </MenuBar>
{:else}
  <HeaderBar title="Controls" blurb="Various control elements" width="small" standalone/>
{/if}
<div class="centered-page small">

  <section class="container-wrapper">
    <header class="container-header">
      <h1>Dropdowns</h1>
    </header>
    <div class="container">
      <div class="control-example">
        <p>Dropdown</p>
        <select class="alt-select">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div class="control-example">
        <p>Dropdown (disabled)</p>
        <select class="alt-select" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </div>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Inputs</h1>
    </header>
    <div class="container">
      <div>
        <label class="input-label" for="input">Text Input</label>
        <input
          class="text-input"
          id="input"
          placeholder="Text input"
        />
      </div>
      <div>
        <label class="input-label" for="input-d">Disabled Input</label>
        <input
          class="text-input"
          id="input-d"
          placeholder="Text input (disabled)"
          disabled
        />
      </div>
      <div>
        <label class="input-label" for="input-r">Required Text Input</label>
        <input
          class="text-input-validate"
          id="input-r"
          placeholder="Text input (required)"
          required
        /><span />
      </div>
      <div>
        <label class="input-label" for="input-v"
          >Validated Text Input (email)</label
        >
        <input
          class="text-input-validate"
          id="input-v"
          type="email"
          placeholder="Text input (invalid)"
        /><span />
      </div>
      <div>
        <label class="input-label" for="input-search">Input with button</label>
        <form class="search-bar">
          <input
            class="text-input --connect-end"
            id="input-search"
            placeholder="Search"
          /><!--
        --><button class="button --connect-start">
            Search
          </button>
        </form>
      </div>
    </div>
  </section>
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Checkboxes</h1>
    </header>
    <div class="container">
      <label for="check1" class="radio-group">
        <input type="checkbox" id="check1" name="radio-group" value="HTML" />
        <span class="radio-label">Option 1</span>
      </label>
      <label for="check2" class="radio-group">
        <input type="checkbox" id="check2" name="radio-group" value="HTML" />
        <span class="radio-label">Option 2</span>
      </label>
      <label for="check3" class="radio-group">
        <input type="checkbox" id="check3" name="radio-group" value="HTML" />
        <span class="radio-label">
          <span class="radio-title">Option 3</span>
          <span class="radio-info">You can provide extra information</span>
        </span>
      </label>
      <label for="check4" class="radio-group">
        <input type="checkbox" id="check4" name="radio-group" value="HTML" />
        <span class="radio-label">
          <span class="radio-title">Option 4</span>
          <span class="radio-info">This is information about option 4</span>
        </span>
      </label>
    </div>
  </section>
</div>

<style lang="scss">
  @import "../../../assets/style/pt-theme-colours";

  .input-label {
    display: block;
    margin-bottom: 4px;
  }
  .search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      margin: 0;
    }
  }

  .switch-example {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .alt-input {
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.7);
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    text-decoration: none;
    border: 1px solid #bbb;
    background-color: white;
  }
  .alt-select {
    padding: 8px;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
    border: 1px solid #bbb;
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.7);
    background: white;
    background: linear-gradient(0deg, #e5e5e5 35%, white 100%);
    //background: #bbb;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    transition: 0.2s linear;
    &:hover {
      cursor: pointer;
      //background: #f5f5f5;
      background: $theme-light;
      color: $theme-on-primary;
      border-color: $theme-control;
    }
    &:active {
      box-shadow: none;
    }
    &:disabled {
      box-shadow: none;
      background: rgba(236, 239, 241, 1);
      border-color: rgba(176, 190, 197, 1);

      color: rgba(176, 190, 197, 1);
      cursor: no-drop;
    }
  }
  .alt-input {
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.7);
    background: #e5e5e5;
  }
  .text-input,
  .text-input-v {
    margin-bottom: 8px;
  }
  .radio-group {
    display: flex;
    padding: 8px;
    accent-color: #602f61;
    font-size: 16px;
    font-weight: normal;
    align-items: center;

    input {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #bbb;
    }

    .radio-label {
      display: inline-block;
      .radio-title {
        display: block;
        font-size: inherit;
        font-weight: inherit;
        margin-bottom: 4px;
      }
      .radio-info {
        display: block;
        font-size: 14px;
        font-weight: normal;
        line-height: 16px;
        color: #6f6f6f;
      }
    }

    &:hover {
      background-color: whitesmoke;
    }
    //.alt-radio {
    //  display: block;
    //}
    label {
      width: content-box;
    }
  }
</style>
