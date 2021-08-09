<template>
  <nav>
    <div class="nav-brand">
      veloorent
    </div>
    <div class="nav-links">
      <a href="/about">About</a>
      <a href="/signup">Signup</a>
      <a href="/login">Login</a>
    </div>
  </nav>
</template>

<script>

export default {
  name: "CommonHeader",
}

</script>

<style>
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    box-shadow: 0px 0px 5px 2px rgba(173, 173, 173, 0.45);
  }
  .nav-links{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>