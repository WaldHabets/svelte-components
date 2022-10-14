<script lang="ts">

    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    /** Components */
    import ListItemLink from "$lib/list-item-link.svelte"

    /** Exports */
    export let backNavigation: false | string = false;
    export let backNavigationLabel: string = "Back";
    export let sidebar: any[] = [];

    /** Icons */
    import { mdiArrowLeft, mdiMenu } from "@mdi/js";
    //import { SidebarGroup } from "./sidebar-contents";
    import { page } from "$app/stores";

    /** Locals */
    let sidebarState: '--expanded' | '--collapsed' = '--collapsed';
    let width;
    $: formfactor = width > 780 ? '--wide' : '--small';
    $: wide = formfactor === '--wide';
    $: expanded = sidebarState === '--expanded';

    function toggleSidebar(): void {
        sidebarState = (sidebarState === '--expanded')
            ? '--collapsed'
            : '--expanded';
    }

    function swipeHandler(event) {

    }
</script>

<div id="page" class={sidebarState + ' ' + formfactor} bind:clientWidth={width}>
    <header id="page-header">
        <section id="page-header-sidebar">
            {#if (!wide && !expanded && !backNavigation)}
                <button class="" id="nav-back-button" on:click={toggleSidebar}>
                    <svg viewBox="0 0 24 24">
                        <path d={mdiMenu} />
                    </svg>
                </button>
            {:else if backNavigation}
                <a class="" id="nav-back-button" href={backNavigation} on:click={toggleSidebar}>
                    <svg viewBox="0 0 24 24">
                        <path d={mdiArrowLeft} />
                    </svg>
                </a>
            {/if}
        </section>
        <section id="page-header-title">

        </section>
        <section id="page-header-actions">
            <slot name="header-end" />
        </section>
    </header>
    {#if wide}
        <div id="page-sidebar" transition:fly="{{x: 100, y: 0, delay: 150, duration: 500, easing: quintOut }}">
            <nav>
                {#each sidebar as sidebarGroup}
                    <ul class="sidebar-group">
                        {#each sidebarGroup.items as sidebarItem}
                            <li
                              title={sidebarItem.text}
                              class={$page.url.pathname === sidebarItem.href ? 'active sidebar-item' : 'sidebar-item'}
                                on:click={toggleSidebar}>
                                <a href={sidebarItem.href}>
                                    <svg viewBox="0 0 24 24">
                                        <path d={sidebarItem.icon} />
                                    </svg>
                                    <span>
                                        {sidebarItem.text}
                                    </span>
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/each}
            </nav>
            <div>
                <slot name="sidebar-actions" />
            </div>
        </div>
    {:else if expanded}
        <div
          id="page-sidebar-container"
          on:click|self={toggleSidebar}>
            <nav
              id="page-sidebar"
              transition:fly="{{x: -100, y: 0, delay: 150, duration: 500, easing: quintOut }}">
                {#each sidebar as sidebarGroup}
                    <section class="container-wrapper">
                    <ul class="list-box">
                        {#each sidebarGroup.items as sidebarItem}
                            <ListItemLink
                              href={sidebarItem.href}
                              iconStart={sidebarItem.icon}
                              on:navigate={toggleSidebar}>
                                {sidebarItem.text}
                            </ListItemLink>
                        {/each}
                    </ul>
                    </section>
                {/each}
            </nav>
            <div>
                <slot name="sidebar-actions" />
            </div>
        </div>
    {/if}
    <!--{#if (wide || !expanded)}-->
        <main id="page-main" transition:fly="{{x: -100, y: 0, delay: 150, duration: 500, easing: quintOut }}">
            <slot name="main" />
        </main>
    <!--{/if}-->
</div>

<style lang="scss">
  @import "../assets/style/pt-theme-colours";

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

  $sidebar-w-expanded: 300px;
  $sidebar-w-collapsed: 54px;
  $sidebar-threshold: 780px;
  $header-height: 56px;
  $header-border: 2px;
  $content-height: calc(100vh - $header-height);

  @mixin scroll-shadows {
      $bg: #f8f8f8;
      $bg-trans: rgba($bg, 0);
      $shadow: rgba(black, 0.3);

      background:
        /* Shadow Cover TOP */
        linear-gradient(
            $bg 12px, $bg-trans
        ) center top,

            /* Shadow Cover BOTTOM */
        linear-gradient(
            $bg-trans,
            $bg 4px
        ) center bottom,

            /* Shadow TOP */
        radial-gradient(
            farthest-side at 50% 0,
            $shadow,
            rgba(0, 0, 0, 0)
        ) center top,

            /* Shadow BOTTOM */
        radial-gradient(
            farthest-side at 50% 100%,
            $shadow,
            rgba(0, 0, 0, 0)
        ) center bottom;

      background-repeat: no-repeat;
      background-size: 100% 40px, 100% 40px, 100% 8px, 100% 4px;
      background-attachment: local, local, scroll, scroll;
  }
  @mixin menu() {

  }
  @mixin sidebar() {
      $padding: 8px;
      $height: 48px;
      $icon-dim: $height - 2*$padding;
      .sidebar-group {
          list-style: none;
          margin: 0;
          padding: $padding 0;

          &:not(:first-child) {
              border-top: 1px solid #bbb;
          }

          .sidebar-item {
              box-sizing: border-box;
              height: $height;
              overflow: hidden;
              margin: 0 $padding;
              a {
                  display: flex;
                  align-items: center;
                  overflow: hidden;
                  flex-wrap: nowrap;
                  font-weight: bold;
                  text-decoration: none;
                  color: inherit;
                  padding: $padding;

                  svg {
                      box-sizing: border-box;
                      vertical-align: middle;
                      flex-shrink: 0;
                      color: inherit;
                      height: $icon-dim;
                      width: $icon-dim;
                      padding: 4px;
                      margin: 0 4px;
                      path {
                          fill: currentColor;
                      }
                  }
                  span {
                      display: inline-block;
                      line-height: $icon-dim;
                      font-size: $icon-dim / 2;
                      overflow: hidden;
                      color: inherit;
                  }
              }
              &:hover,
              &.active {
                  cursor: pointer;
                  color: $theme-on-primary;
                  background-color: $theme-light;
                  border-radius: 32px;
              }
          }
      }
  }

  @mixin page-generic() {
      #nav-back-button {
          $padding-offset: 8px;
          $button-dim: $header-height - 2*$padding-offset;
          $button-border-width: 2px;
          $button-padding: $padding-offset - $button-border-width;
          $icon-dim: $button-dim - 2*$padding-offset;

          box-sizing: border-box;
          width: $button-dim;
          height: $button-dim;
          padding: $button-padding;

          background: none;
          border: none;
          border-radius: 8px;

          &:hover {
              background: rgba(black, 0.05);
          }
          &:active {
              background: rgba(black, 0.1);
          }

          svg {
              width: $icon-dim;
              height: $icon-dim;
          }
      }

      #page-header {
          padding: 0;
          margin: 0;

          display: flex;

          section {
              box-sizing: border-box;
              height: $header-height;
              padding: 8px;
          }
          #page-header-sidebar {
              flex-shrink: 0;
              display: flex;
              gap: 8px;
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
      }
      #page-sidebar {
          height: 100%;
      }
      #page-main {
          overflow-y:scroll;
          background-color: #f8f8f8;
      }
  }

  #page {

    background-color: $theme-background;
    display: grid;
    grid-template-rows: $header-height $content-height;

    &.--small {
        grid-template-areas:
            "header"
            "content";
        grid-template-columns: auto;
        #page-header {
            grid-area: header;
            background-color: #f8f8f8;
        }
        #page-sidebar-container {
            width: 100vw;
            background-color: rgba(black, 0.3);
            position: absolute;
            height: 100vh;
        }
        #page-sidebar {
            //grid-area: content;
            //border-top: 2px solid #bbb;
            border: none;
            position: absolute;
            box-sizing: border-box;
            background-color: #f8f8f8;
            max-width: calc(100% - 96px);
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            box-shadow: 1px 0 4px -2px;
            //padding: 16px;

            @include menu();
        }
        #page-main {
            grid-area: content;
            //border-top: 2px solid #bbb;
        }
        @include page-generic();
    }

    &.--wide {
        grid-template-areas:
            "header header"
            "sidebar main";
        grid-template-columns: $sidebar-w-expanded auto;
        #page-header {
            grid-area: header;
            background-color: transparent;
        }
        #page-sidebar {
            grid-area: sidebar;
            background-color: transparent;

            @include sidebar();
        }
        #page-main {
            grid-area: main;
            border-top-left-radius: 16px;
            border-left: 2px solid #bbb;
            border-top: 2px solid #bbb;
        }
        @include page-generic();
    }
  }
</style>