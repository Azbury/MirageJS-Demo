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
    <div style="display: flex">
    <form style="padding-bottom: 2rem; width: 50%; padding-left: 20rem" class="submit-form" @submit.prevent="addDeveloper">
      <span style="font-size: 4rem">Add Developer</span>
      <div class="form-field">
        <label for="name" style="margin-right: 10px">Name</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div class="form-field">
        <label for="picture" style="margin-right: 10px">Picture URL</label>
        <input type="text" id="picture" v-model="picture">
      </div>
      <button type="submit">Submit</button>
    </form>
    <div style="width: 50%; display: flex; align-items: center; justify-content: center; padding-right: 10rem">
      <button @click.prevent="deleteDeveloper">Delete Developer</button>
    </div>
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
      ],
      name: '',
      picture: ''
    }
  },
  methods: {
    addDeveloper() {
      let payload = {
        name: this.name,
        picture: this.picture
      }
      this.$store.dispatch('createDeveloper', payload)
        .then(() => {
          this.$store.dispatch('getDevelopers')
            .then(res => {
              this.developers = res.data.developers;
            })
        })
    },
    deleteDeveloper() {
      this.$store.dispatch('deleteDeveloper', this.developers.at(-1).id)
        .then(() => {
          this.$store.dispatch('getDevelopers')
            .then(res => {
              this.developers = res.data.developers;
            })
        })
    }
  } 
}


</script>
