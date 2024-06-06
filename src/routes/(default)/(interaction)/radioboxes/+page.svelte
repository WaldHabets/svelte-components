<script lang="ts">
  import ComponentPage from "../../../component-page.svelte";
  import TabPages from "../../../component-page.svelte";
  import Description from "./description.svelte";
  import Demo from "./demo.svelte";
  import Api from "./api.svelte";

  const title: string = "Radioboxes";

  const pages: TabPages = {
    view1: Description,
    view2: Demo,
    view3: Api
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<ComponentPage {title} {pages} />