<script lang="ts">
    /** Icons */
    import { mdiMenu, mdiMenuOpen, mdiArrowLeft } from "@mdi/js";

    /** Exports */
    export let backNavigation: false | string = false;
    export let backNavigationLabel: string = "Back";

    /** Locals */
    let sidebarState: 'expanded' | 'collapsed' = 'expanded';

    function toggleSidebar(): void {
        sidebarState = (sidebarState === 'expanded')
            ? 'collapsed'
            : 'expanded';
    }
</script>

<div id="page" class={sidebarState}>
    <header id="page-header">
        <section id="page-header-sidebar" class={sidebarState}>
            {#if backNavigation}
                <a href={backNavigation} class="flat-button default-size icon flex">
                    <svg viewBox="0 0 24 24">
                        <path d={mdiArrowLeft} />
                    </svg>
                    {backNavigationLabel}
                </a>
            {/if}
            <button class="flat-button" on:click={toggleSidebar}>
                {#if sidebarState === 'collapsed'}
                    <svg viewBox="0 0 24 24">
                        <path d={mdiMenu} />
                    </svg>
                {:else}
                    <svg viewBox="0 0 24 24">
                        <path d={mdiMenuOpen} />
                    </svg>
                {/if}
            </button>
        </section>
        <section id="page-header-title">

        </section>
        <section id="page-header-actions">
            <slot name="header-end" />
        </section>
    </header>
    <div id="page-sidebar">
        <nav>
            <slot name="sidebar-nav" />
        </nav>
        <div>
            <slot name="sidebar-actions" />
        </div>
    </div>
    <main id="page-main">
        <slot name="main" />
    </main>
</div>

<style lang="scss">
  @import "../assets/style/theme";

  :root {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-color: #f8f8f8;

    body {
      margin: 0;
      height: 100%;
    }
  }

  #page {
    $sidebar-w-expanded: 300px;
    $sidebar-w-collapsed: 54px;
    $sidebar-threshold: 780px;
    $header-height: 56px;
    $header-border: 2px;
    $content-height: calc(100vh - $header-height);

    background-color: $theme-background;

    display: grid;
    grid-template-areas:
            "header header"
            "sidebar main";
    grid-template-columns: min-content auto;
    grid-template-rows: $header-height $content-height;

    &.expanded {
      #page-header-sidebar,
      #page-sidebar {
        width: $sidebar-w-expanded;
      }
    }
    &.collapsed {
      #page-sidebar {
        width: $sidebar-w-collapsed;
      }
      #page-header-sidebar {
        min-width: $sidebar-w-collapsed;
        width: max-content;
      }
    }

    #page-header {
      grid-area: header;

      //background-color: #e7e7e7;
        background-color: transparent;
      padding: 0;
      margin: 0;
      //border-bottom: $header-border solid #bbb;

      display: flex;

      section {
        box-sizing: border-box;
        height: $header-height;
        padding: 8px;
      }

        #page-header-sidebar {
            flex-shrink: 0;
        }
      #page-header-title {
        width: available;
        width: -moz-available;
          flex-grow: 1;
      }
      #page-header-actions {
        width: max-content;
          flex-shrink: 0;
      }
        a.flat-button {
            box-sizing: border-box;
        }
      button.flat-button {
        $padding-offset: 8px;
        $button-dim: $header-height - 2*$padding-offset;
        $button-border-width: 2px;
        $button-padding: $padding-offset - $button-border-width;
        $icon-dim: $button-dim - 2*$padding-offset;

        box-sizing: border-box;
        width: $button-dim;
        height: $button-dim;
        padding: $button-padding;

        svg {
          width: $icon-dim;
          height: $icon-dim;
        }
      }
      button.round {
        $padding-offset: 8px;
        $button-dim: $header-height - 2*$padding-offset;
        $button-border-width: 1px;
        $button-padding: $padding-offset - $button-border-width;
        $icon-dim: $button-dim - 2*$padding-offset;

        box-sizing: border-box;
        background-color: white;
        border: $button-border-width solid #bbb;
        border-radius: 50%;
        width: $button-dim;
        height: $button-dim;
        padding: $button-padding;
        box-shadow: 0 0 4px -2px #333;

        svg {
          width: $icon-dim;
          height: $icon-dim;
        }
        &:hover {
          cursor: pointer;
          background-color: #bbb;
        }
        &:active {
          box-shadow: none;
          padding: 10px;
          svg {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
    #page-sidebar {
      grid-area: sidebar;
      //background-color: white;
        background-color: transparent;
      //border-right: 2px solid #bbb;
      height: 100%;
      transition: width 0.5s, visibility 0.5s;
    }
    #page-main {
      grid-area: main;
      overflow-y:scroll;
        background-color: #f8f8f8;
        border-top-left-radius: 16px;
        border-left: 2px solid #bbb;
        border-top: 2px solid #bbb;
    }

    @media screen and (max-width: $sidebar-threshold) {
    #page-header-sidebar {
        min-width: $sidebar-w-collapsed;
        width: max-content;
    }
      #page-sidebar {
        border: none;
      }
        #page-main {
            border-left: none;
            border-radius: 0;
        }
      &.expanded {
        #page-sidebar {
          width: 100vw;
          //display: block;
          visibility: visible;
        }
        #page-main {
          display: none;
        }
      }
      &.collapsed {
        #page-sidebar {
          width: 0;
          //display: none;
          visibility: hidden;
        }
        #page-main {
          display: block;
        }
      }
    }
  }
</style>