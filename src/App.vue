<template>
  <div id="nav">
    <CommonHeader/>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
  import CommonHeader from './components/common/CommonHeader'
  export default {
    name:"App",
    components:{
      CommonHeader
    }
  }

</script>

<style lang="scss">
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a{
    color:black;
    text-decoration: none;
  }
</style>
