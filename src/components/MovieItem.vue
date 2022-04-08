<template>
  <div
    class="movie"
    :style="{ backgroundImage: `url(${movie.Poster})` }">
    <Loader 
      v-if="imageLoading" 
      :size="1.5"
      absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components:{
    Loader
  },
  props:{
    movie: {
      type: Object,
      default: () => ({})   // Object타입은 default가 함수여야함
    }
  },
  data(){
    return {
      imageLoading : true
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    async init(){         // 비동기함수 기반이므로 차례대로 수행시킬수 있게 처리가 필요
      await this.$loadImage(this.movie.Poster)  // load에 쓰이는 movie.Poster는 공유하는가
      this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.movie {
  position: relative;
  $width: 200px;
  width: $width;
  height: $width * (3/2);
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;         // 배경이미지의 너비를 요소의 더 넓은값에 맞춰서 출력
  overflow: hidden;
  &:hover::after{
    content:"";
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border:6px solid $primary;
  }
  .info{
    background-color: rgba($black, .3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    backdrop-filter: blur(10px);
    .year{
      color: $primary;
    }
    .title{
      color: $white;
      white-space:nowrap;
      overflow:hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>