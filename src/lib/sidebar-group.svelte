<script lang="ts">
</script>

<ul class="sidebar-group">
    <slot>

    </slot>
</ul>

<style lang="scss">
    .sidebar-group {
      list-style: none;
      margin: 0;
      padding: 0;

      &:not(:first-child) {
        border-top: 1px solid #bbb;
      }
    }
</style>