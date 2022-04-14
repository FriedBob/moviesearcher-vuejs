
<template>
  <Headline />
  <Search />
  <MovieList />     <!-- Search와 MovieList 간의 데이터 전송을 위해서 Vueex(중앙집중식상태관리패턴)를 이용, 기본적인 vue에서는 형제컴포넌트끼리는 data 전송이 되지 않음 -->
</template>

<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList'

export default {
  components:{
    Headline,
    Search,
    MovieList
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>