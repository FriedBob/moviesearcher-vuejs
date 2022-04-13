<template>
  <div class="container">
    <div
      :class="{ 'no-result': !movies.length }"
      class="inner">
      <Loader 
        v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="movies">
        <MovieItem 
          v-for="movie in movies"
          :key="movie.imdbID" 
          :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
import Loader from '~/components/Loader'

export default {
  components:{
    MovieItem,
    Loader
  },
  computed: {       // 반응성이 유지되어야 하기 때문에 computed에 movie의 movies배열을 정의
                    // -> 반응성유지(computed함수는 지정한 데이터가 변경될때마다 자동실행) + vuex $store에 저장된 데이터를 쓰겠다고 명시하는것
    movies(){
      return this.$store.state.movie.movies     // movies = 배열
    },
    message(){
      return this.$store.state.movie.message
    },
    loading(){
      return this.$store.state.movie.loading
    }
  } // About.vue 파일처럼 ...mapState() 함수로 할당시킬 수도 있다.
}
</script>

<style lang="scss">
// @import "~/scss/main";

.container{
  margin-top: 30px;
  .inner{
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result{
      padding: 70px 0;
    }
  }
  .message{
    color: $gray-400;
    font-size: 20px;
  }
  .movies{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>