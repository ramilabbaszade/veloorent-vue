<template>
    <n-layout style="position: relative">
      <n-layout-header>
        <CommonHeader/>
      </n-layout-header>
      <n-layout-content
        class="layout-content"
      >
        <router-view/>
      </n-layout-content
      >
      <n-layout-footer>Müəllif hüquqları qorunur 2021</n-layout-footer>
    </n-layout>
</template>

<script>
import {NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent} from 'naive-ui'

  import CommonHeader from './components/common/CommonHeader'
  export default {
    name:"App",
    components:{
      CommonHeader,
      NLayout, NLayoutFooter, NLayoutHeader, NLayoutContent
    }
  }

</script>

<style lang="scss">
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Quicksand";
  }
  h1,h2,h3,h4,h5,h6{
    padding: 0;
  }
  a{
    color:black;
    text-decoration: none;
  }
  .n-layout-footer {
    padding: 24px;
  }


  .n-layout-content {
    background: rgba(220, 220, 220, 0.4);
    padding: 1rem 3rem;
  }
</style>
