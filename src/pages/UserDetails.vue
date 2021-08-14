<template>
  <div class="me">
    <div class="me__user">
      <div class="me__user--left">
        <div class="me__user--left__card profile-card">
          <img class="me__user--left__card__picture" src="../assets/img/dss.jpg" alt="profile">
          <h1>Ramil Abbas {{$route.params.id}}</h1>
          <div>
            <n-icon>
              <LocationOnOutlined/>
            </n-icon>
            Sumgayit
          </div>
        </div>
        <div class="me__user--left__card">
          <p>Description is lorem ipsum dolor, is lorem ipsum dolor</p>
          <hr>
          <div class="card-socials">
            <router-link to="/">
              <n-icon size="22px">
                <FacebookFilled/>
              </n-icon>
              Facebook
            </router-link>
            <router-link to="/">
              <n-icon size="22px">
                <LocalPhoneTwotone/>
              </n-icon>
              Phone
            </router-link>
          </div>
        </div>
      </div>
      <div class="me__user--main">
        <div class="head-title">Aktiv elanlar</div>

        <div class="me__user--main__posts">
          <CommonCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonCard from "../components/common/CommonCard";
import {LocationOnOutlined, FacebookFilled, LocalPhoneTwotone} from '@vicons/material'
import {NIcon} from 'naive-ui'

export default {
  name: "UserDetails",
  components: {
    CommonCard,
    LocationOnOutlined,
    FacebookFilled,
    LocalPhoneTwotone,
    NIcon,
  }
}
</script>