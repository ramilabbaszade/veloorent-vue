<template>
  <div class="me">
    <n-carousel style="height: 25rem;" show-arrow autoplay>
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
    <div>
      <h1>Velosiped Apolli 745L no {{ $route.params.id }}</h1>
    </div>
    <div>BMX | 24 | Sumgayit</div>
    <div class="post-details__prices">
      <div class="post-details__prices__item">3azn | saat</div>
      <div class="post-details__prices__item">10azn | günlük</div>
      <div class="post-details__prices__item">25azn | aylıq</div>
    </div>
    <n-button ghost type="success">
      <template #icon>
        <n-icon>
          <LocalPhoneOutlined/>
        </n-icon>
      </template>
      Əlaqə
    </n-button>
    <hr/>
    <div class="post-details__author">
      <n-avatar
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <div>Ramil Abbas</div>
    </div>
    <div class="me_user_posts">
      <CommonCard/>
    </div>
  </div>
</template>

<script>
import CommonCard from "../components/common/CommonCard";
import {LocalPhoneOutlined} from '@vicons/material'
import {NIcon, NButton, NCarousel, NAvatar} from 'naive-ui'

export default {
  name: "PostDetails",
  components: {
    CommonCard,
    LocalPhoneOutlined,
    NIcon,
    NAvatar,
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
.post-details__author{
  display: flex;
  align-items: center;
}
.post-details__prices {
  display: flex;
  justify-content: flex-end;
  width: 100%;

  &__item {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    background: white;
    padding: .5rem;
    border-radius: 5px;
    box-shadow: #b6b6b6 0px 0px 1px 0px;
    border: 1px solid #b6b6b6;

    &:hover {
      box-shadow: #b6b6b6 0px 0px 5px 0px;
    }
  }
}

.me_user_posts {
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
}
</style>
