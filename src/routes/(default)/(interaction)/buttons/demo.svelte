<section class="box-wrapper">
  <header class="box-header">
    <h2>Buttons</h2>
  </header>
  <ul class="box-list">
    <li class="list-item control-example">
      <h3>“Default” button</h3>
      <button class="button">Button</button>
    </li>
    <li class="list-item control-example">
      <h3>“Info” button</h3>
      <button class="button-info">Button</button>
    </li>
    <li class="list-item control-example">
      <h3>“Good” button</h3>
      <button class="button-good">Button</button>
    </li>
    <li class="list-item control-example">
      <h3>“Warning” button</h3>
      <button class="button-warning">Button</button>
    </li>
    <li class="list-item control-example">
      <h3>“Critical” button</h3>
      <button class="button-critical">Button</button>
    </li>
  </ul>
</section>

<style lang="scss">
  .control-example {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      padding-bottom: 8px;
      border-bottom: 1px solid #bbb;
      margin-bottom: 8px;
    }
  }
</style>