<template>
  <RouterLink 
    to="/"
    class="logo">
    <span>OMDb</span>Browser.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
// @import "~/scss/main";

  .logo{
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration-line: none;
    &:hover{
      color: $black;
    }
    span{
      color:$primary;
    }    
  }
</style>