<template>
  <div v-for="(item,index) in bikes" :key="index" class="card-item">
    <router-link :to="'/post/'+item.id"><img src="../../assets/img/dss.jpg" class="card-item__image" :alt="item.title"></router-link>
    <div class="card-item__info">
      <router-link :to="'/post/'+item.id"><h4>{{ item.title }}</h4></router-link>
      <div class="card-item__info__main">
        <div>{{ item.city }} | {{ item.type }} | {{ item.size }}</div>
        <div class="card-item__info__main--price"><b>{{ item.price }}</b><img :src="manat" alt="manat"/></div>
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
