<template>
  <div>{{ movie.Title }}</div>
</template>

<script>
export default {
  props:{
    movie: {
      type: Object,
      default: () => ({})     // Object타입은 default가 함수여야함
    }
  }
}
</script>