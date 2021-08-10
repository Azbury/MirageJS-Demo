<template>
  <div>
    <img 
      src="https://image.shutterstock.com/z/stock-photo-the-business-people-thumb-up-at-the-table-view-from-above-718092013.jpg"
      class="table">
    <div v-for="developer in developers" :key="developer.name">
      <developer></developer>
    </div>
  </div>
</template>

<script>
import Developer from './Developer.vue'

export default {
  components: { Developer },
  name: 'Table',
  created() {
    this.$store.dispatch('getDevelopers')
      .then(() => {

      })
  },
  data() {
    return {
      developers: []
    }
  } 
}


</script>
