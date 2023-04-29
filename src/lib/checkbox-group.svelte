<script context="module" lang="ts">
  export interface CheckboxOption {
    value: string;
    title: string;
    blurb: string | null;
    disabled: boolean;
  }
</script>
<script lang="ts">
  import genID from "$lib/id";

  const id: string = genID();

  export let cClass: string = "";
  export let name: string = "";
  export let options: CheckboxOption[] = [];
  export let checked: string[] = [];
</script>

<ul class={cClass}>
  {#each options as option}
    <li>
      <label for="{id+option.value}" class="radio-item {option.disabled ? 'disabled' : ''}">
        <input type="checkbox"
               id="{id+option.value}"
               name={name} bind:group={checked} value={option.value} disabled={option.disabled} />
        <span class="radio-label">
          <span class="radio-title">{option.title}</span>
          {#if option.blurb}
          <span class="radio-blurb">{option.blurb}</span>
          {/if}
        </span>
      </label>
    </li>
  {/each}
</ul>