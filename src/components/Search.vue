<template>
  <div class="container">
    <input 
      class="form-control"
      type="text" 
      v-model="title"
      placeholder="Search for Movies, Series and more" 
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"                  
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name ==='year'" 
          value="">
          All Years
        </option> <!-- value값이 없는 option은 text content가 그 자체 값이 되고 value값이 있다면 value="" 값을 따라간다. value="" + text content는 textcontent가 가시적으로 표시되지만 실제 값은 ""이다-->
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>


<script>
// import axios from 'axios'

export default {
  data(){
    return{
      title: '',
      type: 'movie',
      number: 10,
      year: '',                               // 아무것도 선택되지 않은 것으로 취급
      filters: [
        {
          name:'type',
          items:['movie','series','episode']
        },
        {
          name: 'number',
          items: [10,20,30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for (let i = thisYear; i>=1985; i--) {
              years.push(i);
            }
            return years
          })()               // 즉시실행 함수
        }
      ]
    }
  },
  methods: {
    // async apply(){
    //   // Serach movie method
    //   const OMDB_API_KEY = 'b0d38b1f';
    //   const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
    //   console.log(res)
    // }

    // Vuex store의 mutation은 .commit()으로 actions는 .dispatch() 을 이용한다
    async apply(){
      this.$store.dispatch('movie/searchMovies', {    // store 폴더의 index.js 의 modules에 작성된 movie 컴포넌트에 들어가서 searchMovies 메서드를 실행한다는 뜻, 2번째 인자는 payload
        title: this.title,
        type: this.type,
        number:this.number,
        year:this.year
      })  
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "~/scss/main";

.container{
  display: flex;
  > * {
    margin-right: 10px;
    font-size:15px;
    &:last-child{
      margin-right: 0;
    }
  }
  .selects{
    display: flex;
    select{
      width: 120px;
      margin-right: 10px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }

  @include media-breakpoint-down(lg){
    display: block;
    input{
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects{
      margin-right: 0;
      margin-bottom: 10px;
      select{
        width: 100%;
      }
    }
    .btn{
      width: 100%;
    }
  }
}
</style>