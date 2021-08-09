<template>
  <div class="me">
    <div class="me__user">
      <img class="me__picture" src="../assets/img/dss.jpg" alt="profile">
      <div class="me__info">
        <h1>Ramil Abbas</h1>
        <div class="me__info__location">
          <n-icon>
            <LocationOnOutlined/>
          </n-icon>
          Sumgayit
        </div>
        <p>Description is lorem ipsum dolor</p>
        <div>
          <n-button type="warning">
            <template #icon>
              <n-icon>
                <EditRound/>
              </n-icon>
            </template>
            Düzəliş et
          </n-button>
        </div>
      </div>

    </div>

    <hr/>
    <div class="me_user_posts">
      <CommonCard/>
    </div>
  </div>
</template>

<script>
import CommonCard from "../components/common/CommonCard";
import {LocationOnOutlined, EditRound} from '@vicons/material'
import {NIcon, NButton} from 'naive-ui'

export default {
  name: "me",
  components: {
    CommonCard,
    LocationOnOutlined,
    NIcon,
    EditRound,
    NButton
  }
}
</script>

<style lang="scss">
.me {
  padding: 0 15rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
