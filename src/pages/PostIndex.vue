<template>
  <div class="me">
    <n-carousel  style="height: 25rem;" show-arrow autoplay>
      <img
        class="carousel-img"
        src="https://s.anw.red/fav/1623979004.jpg!/fw/600/quality/77/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623372884.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623177220.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
      <img
        class="carousel-img"
        src="https://s.anw.red/news/1623152423.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
      />
    </n-carousel>
    <h1>Velosiped no {{$route.params.id}}</h1>
    <n-button type="warning">
      <template #icon>
        <n-icon>
          <LocationOnOutlined/>
        </n-icon>
      </template>
      Düzəliş et
    </n-button>
    <hr/>
    <div class="me_user_posts">
      <CommonCard/>
    </div>
  </div>
</template>

<script>
import CommonCard from "../components/common/CommonCard";
import {LocationOnOutlined} from '@vicons/material'
import {NIcon, NButton, NCarousel} from 'naive-ui'

export default {
  name: "PostIndex",
  components: {
    CommonCard,
    LocationOnOutlined,
    NIcon,
    NCarousel,
    NButton
  }
}
</script>

<style scoped lang="scss">
.me {
  padding: 0 15rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.me__picture {
  width: 18rem;
  height: 18rem;
  border-radius: 10px;
}

.me__user {
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;
}

.me__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__location {

  }
}

.me_user_posts {
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
}
</style>
