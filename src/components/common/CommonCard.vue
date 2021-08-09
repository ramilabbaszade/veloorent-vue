<template>
  <div v-for="(item,index) in bikes" :key="index" class="card-item">
    <img src="../../assets/img/dss.jpg" class="card-item__image" alt="">
    <div class="card-item__info">
      <h4>{{ item.title }}</h4>
      <div class="card-item__info__second">
        <div>{{ item.city }} | {{ item.type }} | {{ item.size }}</div>
      </div>
      <div class="card-item__info__second" style="color:green">
        <div><b>{{ item.price }}</b>azn</div>
        <div>...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCard',
  components: {},
  data() {
    return {
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
          id: 1,
          title: "EMpleee B1 MK",
          price: 10,
          city:"Sumgayit",
          type:"BMX",
          size:"24",
        },
        {
          id: 1,
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