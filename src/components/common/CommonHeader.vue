<template>
  <nav>
      <img src="../../../static/img/logo.png" alt="logo">
    <div class="nav-links">
      <a href="/login">Elan paylaş</a>
      <a href="/about">Haqqımızda</a>
      <a href="/about">Çıxış</a>
    </div>
  </nav>
</template>

<script>

export default {
  name: "CommonHeader",
  data(){
  }
}

</script>

<style lang="scss">

  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 3rem;
    box-shadow: 0px 0px 5px 2px rgba(173, 173, 173, 0.45);
  }
  .nav-links{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
    img{
      width: 5rem;
      height: 5rem;
      object-fit: cover;
    }
</style>