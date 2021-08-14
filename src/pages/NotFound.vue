<template>
  <div class="notfound">
    <n-result
      status="404"
      title="404 Səhifə tapılmadı"
      description="Oops, bura velosiped yolu deyil.."
    >
      <template #footer>
        <n-button>
          <router-link to="/">Əsas yola qayıt</router-link>
        </n-button>
      </template>
    </n-result>
  </div>
</template>

<script>
import {NResult, NButton} from 'naive-ui'

export default {
  name: "NotFound",
  components: {
    NResult,
    NButton
  }
}
</script>

<style scoped>
.notfound {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>