<template>
  <div id="app">
    <img src="./assets/mirage-js.png"  class="mirage-title"/>
    <Table>
    </Table>
  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Table
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}

.mirage-title {
  max-height: 10rem;
}

body {
  margin: 0;
}

.table {
  max-height: 800px;
}

.developer {
  max-height: 100px;
}
</style>
