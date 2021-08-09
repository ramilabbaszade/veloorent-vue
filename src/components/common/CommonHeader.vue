<template>
  <nav>
    <img src="../../../static/img/logo.png" alt="logo">
    <div class="nav-links">
      <router-link to="/">Elan paylaş</router-link>|
      <router-link to="/">Haqqımızda</router-link>
      <router-link to="/">Çıxış</router-link>
    </div>
  </nav>
</template>

<script>

export default {
  name: "CommonHeader",
  data() {
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

