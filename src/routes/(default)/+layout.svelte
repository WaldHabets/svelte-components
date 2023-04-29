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
    mdiGesture, mdiSlashForward, mdiCheckboxMarked, mdiRadioboxMarked, mdiFormTextbox, mdiTableRow
  } from "@mdi/js";
  import type { SidebarContent } from "$lib/sidebar-contents";

  let sidebarContents: SidebarContent = {
    title: "LibVitra",
    items: [
      {
        name: null,
        items: [
          {
            icon: mdiHomeOutline,
            href: "/",
            text: "Home",
          },
        ],
      }, {
        name: "Style",
        items: [
          {icon: mdiPageLayoutBody,href: "/layout",text: "Layout & Size",},
          {icon: mdiEmoticonOutline,href: "/iconography",text: "Iconography",},
          {icon: mdiPalette,href: "/colour",text: "Colour",},
        ],
      }, {
        name: "Input",
        items: [
          {icon: mdiButtonCursor, href: "/buttons",text: "Buttons",},
          {icon: mdiRadioboxMarked, href: "/radioboxes",text: "Radioboxes",},
          {icon: mdiCheckboxMarked, href: "/checkboxes",text: "Checkboxes",},
          {icon: mdiButtonCursor, href: "/controls",text: "Input fields",},
          {icon: mdiFormTextbox,href: "/gestures",text: "Gestures",},
        ],
      }, {
        name: "Patterns",
        items: [
          {icon: mdiPalette,href: "/", text: "Header bar"},
          {icon: mdiPalette,href: "/", text: "Menu bar"},
          { icon: mdiCardOutline, href: "/banners", text: "Banners" },
        ],
      }, {
        name: "Containers",
        items: [
          { icon: mdiCardOutline, href: "/containers", text: "Containers" },
          { icon: mdiFormatListBulletedSquare, href: "/list-box", text: "List Boxes" },
          { icon: mdiFormatListBulletedSquare, href: "/#", text: "Vertical & Grid Lists" },
        ],
      }, {
        name: "Navigation",
        items: [
          { icon: mdiViewCarouselOutline, href: "/", text: "Sidebar" },
          { icon: mdiTableRow, href: "/views", text: "Tabs" },
          { icon: mdiSlashForward, href: "/breadcrumbs", text: "Breadcrumbs"}
        ]
      }
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
