<template>
  <div class="grid-cards">
    <CommonCard/>
  </div>
</template>

<script>
import CommonCard from "../components/common/CommonCard";

export default {
  name: 'Home',
  components: {CommonCard},
  data() {
    return {
      bikes: [
        {
          id: 1,
          title: "EMpleee B1 MK",
          price: 10,
          city: "Sumgayit",
          type: "BMX",
          size: "24",
        },
        {
          id: 1,
          title: "EMpleee B1 MK",
          price: 10,
          city: "Sumgayit",
          type: "BMX",
          size: "24",
        },
        {
          id: 1,
          title: "EMpleee B1 MK",
          price: 10,
          city: "Sumgayit",
          type: "BMX",
          size: "24",
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


</style>
