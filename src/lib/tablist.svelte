<script context="module" lang="ts">
  export interface Tab {
    name: string;
    key: string;
  }
</script>
<script lang="ts">
  /** Styling */
  export let cStyle: string | null = null;
  export let cClass: string | null = null;
  /** Attributes */
  export let tabs: Tab[];
  export let active: Tab =  tabs[0];

  /** Id */
  import genID from "$lib/id";
  const id: string = genID();

  /** Functions */
  const setActive = (tab: Tab) => {
    active = tab;
  }

  const getIndexOfId = (tabID: string): number => {
    for (let i = 0; i < tabs.length; ++i) {
      if (tabID.match(id+tabs[i].key))
        return i;
    }
    return -1;
  }

  const setFocus = (offset: number) => {
    const focused = document.activeElement;
    if (!focused)
      return;
    const index = getIndexOfId(focused.id);
    if (index < 0)
      return;
    moveFocus(index + offset);
  }

  const moveFocus = (index: number) => {
    const nextIndex = index % tabs.length;
    const nextTab = tabs[nextIndex < 0 ? tabs.length - 1 : nextIndex];
    document.getElementById(id+nextTab.key).focus();
  }

  const onKeyEvent = (e: KeyboardEvent) => {
    const tablist: HTMLElement = document.getElementById(id);
    if (!tablist.contains(document.activeElement))
      return;

    switch (e.key) {
      case "ArrowLeft":
        setFocus(-1);
        e.preventDefault();
        break;
      case "ArrowRight":
        setFocus(+1);
        e.preventDefault();
        break;
      case "Home":
        moveFocus(0);
        e.preventDefault();
        break;
      case "End":
        moveFocus(tabs.length - 1);
        e.preventDefault();
        break;
    }
  }
</script>

<svelte:window on:keydown={onKeyEvent} />
<div
  role="tablist"
  {id}
  class="tablist {cClass}"
  style={cStyle} >
  {#each tabs as tab}
    <button
      role="tab"
      aria-selected="{active.key === tab.key}"
      id="{id+tab.key}"
      class={active.key === tab.key ? "selected" : ""}
      on:click={() => setActive(tab)}>{tab.name}
    </button>
  {/each}
</div>