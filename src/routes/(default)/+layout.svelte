<script lang="ts">
    /** Layout */
    import PageLayout from "../../lib/page-layout.svelte";
    /** Sidebar */
    import SidebarGroup from "../../lib/sidebar-group.svelte";
    import SidebarTab from "../../lib/sidebar-tab.svelte";
    /** Icons */
    import {
        mdiCardOutline,
        mdiViewCarouselOutline,
        mdiButtonCursor,
        mdiCogOutline,
        mdiHome, mdiHomeOutline,
      mdiFormatListBulletedSquare
    } from "@mdi/js";
</script>

<PageLayout>
    <svelte:fragment slot="sidebar-nav">
        <SidebarGroup>
            <SidebarTab icon={mdiHomeOutline} href="/" title="Home">Tab 1</SidebarTab>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarTab icon={mdiButtonCursor} href="/controls" title="Controls" />
        </SidebarGroup>
        <SidebarGroup>
            <SidebarTab icon={mdiCardOutline} href="/containers" title="Containers" />
            <SidebarTab icon={mdiFormatListBulletedSquare} href="/list" title="List" />
            <SidebarTab icon={mdiViewCarouselOutline} href="/views" title="Views">Another group 2 item</SidebarTab>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarTab icon={mdiHome} href="/nested" title="Nested pages" />
            <SidebarTab icon="{mdiHome}" href="/context" title="Context changes" />
        </SidebarGroup>
    </svelte:fragment>
    <slot slot="main"></slot>
</PageLayout>

<style lang="scss">
    :root {
        body {
            height: 100%;
        }
    }
</style>