<template>
  <div class="post_details">
    <div class="post_details__main">
      <div class="post_details__main--left">
        <div class="post_details__main--left__header">
          <h1>Velosiped Apolli 745L no {{ $route.params.id }}</h1>
          <div>BMX | 24 | Sumgayit</div>
        </div>
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
        <div class="post_details__main--left__more">
          More
        </div>
      </div>
      <div class="post_details__main--right">
        <div class="post_details__main--right__card">
        <div class="post_details__prices">
          <div class="post_details__prices__item"><span class="price">3<img :src="manat" alt="manat"/></span> <div>saat</div> </div>
          <div class="post_details__prices__item"><span class="price">8<img :src="manat" alt="manat"/></span> <div>günlük</div> </div>
          <div class="post_details__prices__item"><span class="price">25<img :src="manat" alt="manat"/></span> <div>aylıq</div> </div>
        </div>
        <div class="post_details__main--right__buttons">
          <n-button size="large" type="success" style="width: 100%;">Əlaqə</n-button>
          <n-button size="large" type="warning" style="width: 100%;margin-top: .5rem">Düzəliş et</n-button>
        </div>
      </div>
      </div>
    </div>


    <div class="post_details__author">
      <div class="author-pic">
        <img src="../assets/img/dss.jpg" alt="author"/>
      </div>
      <div class="author-info">
        <router-link to="/user/1">
          <div class="author-info__name">Ramil Abbaszade</div>
        </router-link>
        <div class="author-info__city">Sumgayit</div>
      </div>
    </div>
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
import manat from '/static/img/manat.svg'

import {
  NCarousel,
  NDivider,
  NButton,
  // NAvatar,   NIcon
} from 'naive-ui'

export default {
  name: "PostDetails",
  components: {
    CommonCard,
    NDivider,
    NButton,
    NCarousel,
  },
  data(){
    return {
      manat:manat,
    }
  }
}
</script>
