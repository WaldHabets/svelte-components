<script lang="ts">
  /** Layout */
  import { page } from "$app/stores";
  import PageLayout from "../../lib/page-layout.svelte";
  /** Sidebar */
  //import { type SidebarGroup, type SidebarItem} from "../../lib/sidebar-contents";
  /** Icons */
  import {
    mdiCardOutline,
    mdiViewCarouselOutline,
    mdiButtonCursor,
    mdiEmoticonOutline,
    mdiPageLayoutBody,
    mdiMagnify,
    mdiPalette,
    mdiHomeOutline,
    mdiFormatListBulletedSquare,
    mdiGesture,
  } from "@mdi/js";
  import type { SidebarContent } from "$lib/sidebar-contents";

  let sidebarContents: SidebarContent = {
    back: null,
    title: "LibVitra",
    items: [
      {
        name: "1",
        items: [
          {
            icon: mdiHomeOutline,
            href: "/",
            text: "Home",
          },
        ],
      }, {
        name: "Style & Layout",
        items: [
          {
            icon: mdiPageLayoutBody,
            href: "/layout",
            text: "Layout & Size",
          },
          {
            icon: mdiEmoticonOutline,
            href: "/iconography",
            text: "Iconography",
          },
          {
            icon: mdiPalette,
            href: "/colour",
            text: "Colour",
          },
        ],
      }, {
        name: "Interaction",
        items: [
          {
            icon: mdiButtonCursor,
            href: "/controls",
            text: "Controls",
          },
          {
            icon: mdiGesture,
            href: "/gestures",
            text: "Gestures",
          },
        ],
      }, {
        name: "3",
        items: [{ icon: mdiMagnify, href: "/search", text: "Search" }],
      }, {
        name: "Structure",
        items: [
          { icon: mdiCardOutline, href: "/containers", text: "Containers" },
          { icon: mdiFormatListBulletedSquare, href: "/list", text: "List" },
          { icon: mdiViewCarouselOutline, href: "/views", text: "Views" },
        ],
      },
    ]
  };
</script>

<PageLayout sidebar={sidebarContents} {page}>
  <slot slot="main" />
</PageLayout>

<style lang="scss">
  :root {
    body {
      height: 100%;
    }
  }
</style>
