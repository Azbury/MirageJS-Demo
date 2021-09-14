<template>
  <div class="image-container">
    <img 
      src="https://image.shutterstock.com/z/stock-photo-the-business-people-thumb-up-at-the-table-view-from-above-718092013.jpg"
      class="table">
    <template v-for="(developer, index) in developers">
      <developer 
        :name="developer.name" 
        :picture="developer.picture" 
        :absolutePositioning="absolutePositioning[index]"
        :key="developer.name"></developer>
    </template>
  </div>
</template>

<script>
import Developer from './Developer.vue'

export default {
  components: { Developer },
  name: 'Table',
  created() {
    this.$store.dispatch('getDevelopers')
      .then(res => {
        this.developers = res.data.developers;
      })
  },
  data() {
    return {
      developers: [],
      absolutePositioning: [
        { top: '3rem', left: '40rem' },
        { top: '3rem', left: '60rem' },
        { top: '18rem', left: '22rem' },
        { top: '18rem', left: '78rem' },
        { top: '35rem', left: '43rem' },
        { top: '35rem', left: '60rem' }
      ]
    }
  } 
}


</script>
