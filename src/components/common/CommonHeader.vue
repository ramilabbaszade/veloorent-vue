<template>
  <nav>
    <router-link to="/"><img src="../../../static/img/logo.png" alt="logo"></router-link>
    <div class="nav-links">
      <router-link to="/" @click="activate">Elan paylaş</router-link>|
      <router-link to="/me">Me</router-link>
      <router-link to="/">Haqqımızda</router-link>
      <router-link to="/">Çıxış</router-link>
    </div>
  </nav>
  <n-drawer v-model:show="active" :width="502" :placement="'right'">
    <n-drawer-content title="Giriş" closable>
      Stoner is a 1965 novel by the American writer John Williams.
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { ref } from 'vue'
import {NDrawer, NDrawerContent} from 'naive-ui'

export default {
  name: "CommonHeader",
  components:{
    NDrawer,
    NDrawerContent
  },
  data() {
  },
  setup () {
    const active = ref(false)
    const activate = () => {
      active.value = true
    }
    return {
      active,
      activate
    }
  }

}

</script>

<style lang="scss">

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 3rem;
  box-shadow: 0px 0px 5px 2px rgba(173, 173, 173, 0.45);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

img {
  width: 5rem;
  height: 3rem;
  object-fit: cover;
}
</style>

