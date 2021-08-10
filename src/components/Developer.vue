<template>
  <div>
    <span>{{ name }}</span>
    <img 
      :src="picture"
      class="developer">
  </div>
</template>

<script>
export default {
  name: 'Developer',
  props: {
    name: String,
    picture: String
  }
}
</script>
