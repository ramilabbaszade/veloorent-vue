<template>
  <div class="post_details">
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
      <div>BMX | 24 | Sumgayit</div>
    </div>
    <div class="post_details__prices">
      <div class="post_details__prices__item">3azn | saat</div>
      <div class="post_details__prices__item">10azn | günlük</div>
      <div class="post_details__prices__item">25azn | aylıq</div>
    </div>
    
    <div class="post_details__author">
      <div class="author-pic">
        <img src="../assets/img/dss.jpg" alt="author"/>
      </div>
      <div class="author-info">
        <router-link to="/user/1"><div class="author-info__name">Ramil Abbaszade</div></router-link>
        <div class="author-info__city">Sumgayit</div>
      </div>
    </div>
<!--    <n-button ghost type="success">-->
<!--      <template #icon>-->
<!--        <n-icon>-->
<!--          <LocalPhoneOutlined/>-->
<!--        </n-icon>-->
<!--      </template>-->
<!--      Əlaqə-->
<!--    </n-button>-->
    <n-divider title-placement="left">Müəllifin başqa elanları</n-divider>
    <div class="post_details--posts">
      <CommonCard/>
    </div>
    <n-divider title-placement="left">Oxşar elanlar</n-divider>
    <div class="post_details--posts">
      <CommonCard/>
    </div>
  </div>
</template>

<script>
import CommonCard from "../components/common/CommonCard";
// import {LocalPhoneOutlined} from '@vicons/material'
import {NCarousel, NDivider
  // NAvatar, NButton,  NIcon
} from 'naive-ui'

export default {
  name: "PostDetails",
  components: {
    CommonCard,
    NDivider,
    // LocalPhoneOutlined,
    // NIcon,
    // NAvatar,
    // NButton
    NCarousel,
  }
}
</script>
