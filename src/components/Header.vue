<!-- active-class의 default는 router-link-active, 할당으로 다른값으로 지정이 가능 -->
<template>
  <header>
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          :to="nav.href"
          active-class="active"         
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      navigations: [
        {
          name:'Search',
          href:'/'
        },
        {
          name:'Movie',
          href:'/movie'
        },
        {
          name: 'About',
          href:'/about'
        }
      ]
    }
  }
}
</script>