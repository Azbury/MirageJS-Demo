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
        { top: '3rem', left: '47rem' },
        { top: '3rem', left: '65rem' },
        { top: '18rem', left: '28rem' },
        { top: '18rem', left: '80rem' },
        { top: '35rem', left: '48rem' },
        { top: '35rem', left: '65rem' }
      ]
    }
  } 
}


</script>
