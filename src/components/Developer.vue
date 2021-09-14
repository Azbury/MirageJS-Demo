<template>
  <div style="position: absolute" :style="{ top: absolutePositioning.top, left: absolutePositioning.left }">
    <span style="font-size: 3rem">{{ name }}</span>
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
    picture: String,
    absolutePositioning: Object
  }
}
</script>
