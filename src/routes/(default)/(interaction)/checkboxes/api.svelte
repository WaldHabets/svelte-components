<h2 class="title-2">Checkbox</h2>
<section class="container-wrapper">
  <header class="container-header">
    <h3>Plain HTML & CSS</h3>
  </header>
  <div class="container">
    <code class="code">
      &lt;label for="id" class="radio-item"&gt;<br/>
      <span class="t9"></span>&lt;input type="checkbox" id="id" /&gt;<br/>
      <span class="t9"></span>&lt;span class="radio-label"&gt;<br/>
      <span class="t9"></span><span class="t9"></span>&lt;span class="radio-title"&gt;Title&lt;/span&gt;<br/>
      <span class="t9"></span><span class="t9"></span>&lt;span class="radio-blurb"&gt;Blurb&lt;/span&gt;<br/>
      <span class="t9"></span><span class="t9"></span>&lt;/span&gt;<br/>
      &lt;/label&gt;<br/>
    </code>
  </div>
</section>

<section class="container-wrapper">
  <header class="container-header">
    <h3>Svelte Component</h3>
  </header>
  <div class="container">
    Attributes
    <dl>
      <dt>id</dt><dd>string</dd>
      <dt>name</dt><dd>string</dd>
      <dt>title</dt><dd>string</dd>
      <dt>blurb</dt><dd>string</dd>
      <dt>value</dt><dd>string</dd>
      <dt>checked</dt><dd>boolean (false)</dd>
      <dt>disabled</dt><dd>boolean (false)</dd>
    </dl>
    <code class="code">
      &lt;Checkbox /&gt;<br/>
    </code>
  </div>
</section>

<h2 class="title-2">Checkbox Group</h2>

<style lang="scss">
  .code {
    display: block;
    padding: 8px;
    border: 1px solid var(--pt-border);
    border-inline-start-width: 8px;
    background-color: var(--pt-container-bg-highlight);
    font-size: 1rem;
    line-height: 1.5rem;
    overflow-x: scroll;
    white-space: nowrap;
  }
  span.t9 {
    margin-inline-start: 16px;
  }
  dd {
    margin-inline-start: 16px;
  }
</style>