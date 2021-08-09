<template>
  <div class="grid-cards">
    <div v-for="(item,index) in bikes" :key="index" class="card-item">
      <img src="../assets/img/dss.jpg" class="card-item__image" alt="">
      <div class="card-item__info">
        <h4>{{ item.title }}</h4>
        <div class="card-item__info__second">
          <div>{{ item.city }} | {{ item.type }} | {{ item.size }}</div>
        </div>
        <div class="card-item__info__second" style="color:green">
          <div><b>{{item.price}}</b>azn</div>
          <div>...</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
.grid-cards {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: .5rem;

  @media only screen and (max-width: 1600px) {
    & {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media only screen and (max-width: 1040px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 750px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 425px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

.card-item {
  height: 15rem;
  border: 1px solid rgba(220, 220, 220, 0.6);
  border-radius: 6px;

  &__image {
    width: 100%;
    height: 10rem;
  }

  &__info {
    padding: 0rem .5rem;

    &__second{
      display: flex;
      justify-content: space-between;
    }
  }

}

</style>
