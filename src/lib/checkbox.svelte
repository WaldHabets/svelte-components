<script lang="ts">
  export let id: string = "";
  export let name: string = "";
  export let title: string = "";
  export let blurb: string | null = null;
  export let value: object | null = null;
  export let checked: boolean = false;
  export let disabled: boolean = false;
</script>

<label for="{id}" class="radio-group {disabled ? 'disabled' : ''}">
    <input type="checkbox" {id} {name} {value} bind:checked={checked} {disabled} />
  <span class="radio-label">
    <span class="radio-title">{title}</span>
    {#if blurb}
    <span class="radio-blurb">{blurb}</span>
    {/if}
  </span>
</label>

<style lang="scss">
  .radio-group {
    display: flex;
    padding: 8px;
    accent-color: var(--pt-theme-primary);
    font-size: 1rem;
    font-weight: normal;
    align-items: center;

    &:hover:not(.disabled) {
      background: var(--pt-container-bg-highlight);
      border-radius: 8px;
    }

    &:focus-within:focus-visible {
      outline: 4px solid var(--pt-theme-info);
      input {
        outline: none;
      }
    }

    input {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #bbb;
    }

    .radio-label {
      display: inline-flex;
      flex-direction: column;
      gap: 4px;

      .radio-title {
        font-size: 1rem;
        font-weight: normal;
      }

      .radio-blurb {
        font-size: 0.875rem;
        font-weight: normal;
        line-height: 1;
        //color: #6f6f6f;
      }
    }
    &.disabled {
      .radio-label {
        opacity: 0.75;
        .radio-title,
        .radio-blurb {
          text-decoration: line-through;
        }
      }
    }
  }
</style>