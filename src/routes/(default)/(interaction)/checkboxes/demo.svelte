<script lang="ts">
  import Checkbox from "$lib/checkbox.svelte";
  import CheckboxGroup from "$lib/checkbox-group.svelte";

  const options = [
    {value: "option01", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option02", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option03", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option04", title:"Option", blurb:"This options has some extra text", disabled: true},
    {value: "option05", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option06", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option07", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option08", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option09", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option10", title:"Option", blurb:"This options has some extra text", disabled: true},
    {value: "option12", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option13", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option14", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option15", title:"Option", blurb:"This options has some extra text", disabled: false},
    {value: "option16", title:"Option", blurb:"This options has some extra text", disabled: false},
  ]
  let checked = ["option2", "option5"];
</script>

<div class="centered-page small">
  <section class="container-wrapper">
    <header class="container-header">
      <h1>Listbox Checkboxes</h1>
    </header>
    <ul class="list-box">
      <li class="list-item">
        <Checkbox id="check1" name="check1" title="Option 1" /></li>
      <li class="list-item">
        <Checkbox id="check2" name="check2" title="Option 2" blurb="Has some blurb text." /></li>
      <li class="list-item">
        <Checkbox id="check3" name="check3" title="Option 2" blurb="Has some blurb text." checked /></li>
      <li class="list-item">
        <Checkbox id="check4" name="check4" title="Option 2" blurb="Has some blurb text." disabled/></li>
      <li class="list-item">
        <Checkbox id="check5" name="check5" title="Option 2" blurb="Has some blurb text." /></li>
    </ul>
  </section>

  <section class="container-wrapper">
    <header class="container-header">
      <h1>Collapsable Select</h1>
    </header>
    <details class="details-container-wrapper">
      <summary class="summary-container">
        <span class="summary-flex">
          <span class="summary-title">Select your options</span>
          <span class="summary-blurb">Selected: {checked}</span>
        </span>
      </summary>
      <CheckboxGroup
        bind:checked={checked} cClass="details-container options-grid" name="example" {options}/>
    </details>
  </section>
</div>

<style lang="scss">
  :global(.options-grid) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }
</style>