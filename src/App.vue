<template>
  <Header />        <!-- route로 인해 페이지가 바뀌더라도 RouterView라는 컴포넌트 내에서만 바뀜 , 즉 Header는 그대로 출력-->
  <RouterView />    <!-- 전역적으로 사용할 수 있는 RouterView라는 컴포넌트 -->
  <Footer />
</template>

<style lang="scss">
// @import "~/scss/main";


</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components:{
    Header,
    Footer
  }
}
</script>