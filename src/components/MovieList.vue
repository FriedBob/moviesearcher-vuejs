<template>
  <div class="container">
    <div class="inner">
      <div class="message">
        {{ message }}
      </div>
      <MovieItem 
        v-for="movie in movies"
        :key="movie.imdbID" 
        :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
  components:{
    MovieItem
  },
  computed: {       // 반응성이 유지되어야 하기 때문에 computed에 movie의 movies배열을 정의
                    // -> 반응성유지(computed함수는 지정한 데이터가 변경될때마다 자동실행) + vuex $store에 저장된 데이터를 쓰겠다고 명시하는것
    movies(){
      return this.$store.state.movie.movies     // movies = 배열
    },
    message(){
      return this.$store.state.movie.message
    }
  }
}
</script>