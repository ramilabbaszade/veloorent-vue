<template>
  <nav>
    <router-link to="/"><img src="../../../static/img/logo.png" alt="logo"></router-link>
    <div class="nav-links">
      <router-link to="/" @click="activate">Elan paylaş</router-link>
      |
      <router-link to="/me">Me</router-link>
      <router-link to="/">Haqqımızda</router-link>
      <router-link to="/">Çıxış</router-link>
    </div>
  </nav>
  <n-drawer v-model:show="active" :width="502" :placement="'right'">
    <n-drawer-content title="..." header-style="color:green" closable>
      <div v-if="isLogin" style="margin-top: 4rem">
        <h1>Giriş et</h1>
        <form>
          <n-space style="margin-top: 2rem" vertical>
            <div>Email:</div>
            <n-input type="email" size="large" title="Email" placeholder="Daxil edin"/>
            <div>Şifrə:</div>
            <n-input
              type="password"
              title="Şifrə"
              size="large"
              show-password-toggle
              placeholder="Daxil edin"
              :maxlength="16"
            />
            <n-space style="margin-top: 2rem; justify-content: space-between">
              <n-button type="success">
                <template #icon>
                  <n-icon>
                    <DoneRound/>
                  </n-icon>
                </template>
                Təsdiqlə
              </n-button>
              <n-button @click="isLogin=false" style="margin-right: 1rem" text>
                <template #icon>
                  <n-icon>
                    <ArrowRightRound />
                  </n-icon>
                </template>Qeydiyyat
              </n-button>
            </n-space>
            <router-link to="#">Şifrəmi unutdum</router-link>

          </n-space>
        </form>
      </div>
      <div v-else style="margin-top: 4rem">
        <h1>Qeydiyyat</h1>
        <form>
          <n-space style="margin-top: 2rem" vertical>
            <div>İstifadəçi adı:</div>
            <n-input type="text" size="large" title="İstifadəçi adı" placeholder="Daxil edin"/>
            <div>Email:</div>
            <n-input type="email" size="large" title="Email" placeholder="Daxil edin"/>
            <div>Şifrə:</div>
            <n-input
              type="password"
              title="Şifrə"
              size="large"
              show-password-toggle
              placeholder="Daxil edin"
              :maxlength="16"
            />
            <n-space style="margin-top: 2rem; justify-content: space-between">
              <n-button type="success">
                <template #icon>
                  <n-icon>
                    <DoneRound/>
                  </n-icon>
                </template>
                Təsdiqlə
              </n-button>
              <n-button @click="isLogin=true" style="margin-right: 1rem" text>
                <template #icon>
                  <n-icon>
                     <ArrowRightRound />
                  </n-icon>
                </template>Giriş et
              </n-button>
            </n-space>
          </n-space>
        </form>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import {ref} from 'vue'
import {NDrawer, NDrawerContent, NInput, NIcon, NSpace, NButton} from 'naive-ui'
import {DoneRound, ArrowRightRound} from '@vicons/material'

export default {
  name: "CommonHeader",
  components: {
    NDrawer,
    NIcon,
    DoneRound,
    ArrowRightRound,
    NButton,
    NSpace,
    NInput,
    NDrawerContent
  },
  data() {
    return {
      isLogin: true
    }
  },
  setup() {
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

