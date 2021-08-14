<template>
  <div v-for="(item,index) in bikes" :key="index" class="card-item">
    <router-link :to="'/post/'+item.id"><img src="../../assets/img/dss.jpg" class="card-item__image" :alt="item.title"></router-link>
    <div class="card-item__info">
      <router-link :to="'/post/'+item.id"><h4>{{ item.title }}</h4></router-link>
      <div class="card-item__info__second">
        <div>{{ item.city }} | {{ item.type }} | {{ item.size }}</div>
      </div>
      <div class="card-item__info__second">
        <div><b>{{ item.price }}</b><img class="card-item__manat" :src="manat" alt="manat"/></div>
        <div>...</div>
      </div>
    </div>
  </div>
</template>

<script>
import manat from '/static/img/manat.svg'

export default {
  name: 'CommonCard',
  components: {},
  data() {
    return {
      manat:manat,
      bikes: [
        {
          id: 1,
          title: "EMpleee B1 MK",
          price: 10,
          city:"Sumgayit",
          type:"BMX",
          size:"24",
        },
        {
          id: 2,
          title: "EMpleee B1 MK",
          price: 10,
          city:"Sumgayit",
          type:"BMX",
          size:"24",
        },
        {
          id: 3,
          title: "EMpleee B1 MK",
          price: 10,
          city:"Sumgayit",
          type:"BMX",
          size:"24",
        },
        {
          id: 3,
          title: "EMpleee B1 MK",
          price: 10,
          city:"Sumgayit",
          type:"BMX",
          size:"24",
        },
        {
          id: 3,
          title: "EMpleee B1 MK",
          price: 10,
          city:"Sumgayit",
          type:"BMX",
          size:"24",
        },
        {
          id: 3,
          title: "EMpleee B1 MK",
          price: 10,
          city:"Sumgayit",
          type:"BMX",
          size:"24",
        },
      ]
    }
  }
}
</script>

<style lang="scss">

.card-item {
  height: 15rem;
  border: 1px solid rgba(220, 220, 220, 0.6);
  border-radius: 8px;
  background: white;

  &__manat{
    width: 16px;
    height: 12px;
  }

  &__image {
    width: 100%;
    height: 10rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &__info {
    padding: 0rem .5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__second {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>