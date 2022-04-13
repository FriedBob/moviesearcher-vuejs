<template>
  <div class="about">
    <div class="photo">
      <Loader
        v-if="imageLoading"
        absolute />
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import Loader from '~/components/Loader';
import {mapState} from 'vuex';

export default {
  component:{
    Loader
  },
  data(){
    return{
      imageLoading: true
    }
  },
  computed:{
    // mapState('사용할모듈',[배열(상태의 나열)])
    ...mapState('about',[
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ])// 함수의 결과가 객체내부에서 등록될수있도록 전개연산자 ... 을 활용
      // 반환된 mapState()함수의 return 객체가 전개연산자 ...에 의해 전개되서 computed에 등록

    // ---- 위의 내용은 아래의 내용과 완전히 같다 vuex helper 활용 ----

    // image(){
    //   return this.$store.state.about.image
    // },
    // name(){
    //   return this.$store.state.about.name
    // },
    // email(){
    //   return this.$store.state.about.email
    // },
    // phone(){
    //   return this.$store.state.about.phone
    // },
    // blog(){
    //   return this.$store.state.about.blog
    // }

  },
  mounted() {                           // life cycle에는 비동기 async 키워드를 붙일수 없다
    this.init()
  },
  methods:{
    async init(){                       // 그래서 다른부분에서 비동기를 구현한것을 가져옴
      await this.$loadImage(this.image)
      this.imageloading = false
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "~/scss/main";

.about{
  text-align: center;
  .photo{
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    img{
      width: 100%;
      border-radius: 50%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "0swald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>