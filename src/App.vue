<template>
    <n-layout>
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
