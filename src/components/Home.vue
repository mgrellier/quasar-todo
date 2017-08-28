<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-page-container transition-generic">
    <main class="layout-page">
      <div class="layout-padding">
        <todo-list />
      </div>
    </main>
  </div>
</template>

<script>
  import TodoList from './TodoList'

  export default {
    components: {
      TodoList
    },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
