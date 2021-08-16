<template>
  <div class="home__filter">
    <n-select style="width: 15rem" v-model:value="value" size="large" clearable placeholder="Şəhər" :options="cityOptions"/>
    <n-select style="width: 15rem" v-model:value="value" size="large" clearable placeholder="Tipi" :options="typeOptions"/>
    <n-select style="width: 10rem" v-model:value="value" size="large" clearable placeholder="Ölçüsü" :options="sizeOptions"/>
    <n-select style="width: 20rem" v-model:value="value" size="large" clearable placeholder="Aksesuarlar" multiple :options="accesuares"/>
    <n-button size="large" color="#1d1e44">Axtar</n-button>

  </div>
  <div class="grid-cards">
    <CommonCard/>
  </div>
</template>

<script>
import CommonCard from "../components/common/CommonCard";
import {NSelect, NButton} from 'naive-ui'

export default {
  name: 'Home',
  components: {CommonCard, NSelect,NButton},
  data() {
    return {
      options: [
        {
          label: "Everybody's Got Something to Hide Except Me and My Monkey",
          value: 'song0',
        },
      ],
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
      ],
      cityOptions:[
        {
          value: "Sumgait",
          label: "Sumgayit",
        },
        {
          value: "Baku",
          label: "Baki",
        },
        {
          value: "Ganja",
          label: "Gəncə",
        },
      ],
      accesuares:[
        {
          value: "Lights",
          label: "Fənər",
        },
        {
          value: "Basket",
          label: "Səbət",
        },
        {
          value: "horn",
          label: "Siqnal",
        },
      ],
      sizeOptions: [
        {
          value: 16,
          label: 16,
        },
        {
          value: 20,
          label: 20
        },
        {
          value: 24,
          label: 24
        },
        {
          value: 26,
          label: 26
        },
        {
          value: 28,
          label: 28
        },
      ],
      typeOptions: [
        {
          value: "BMX",
          label: "BMX",
        },
        {
          value: "City",
          label: "Şəhər "
        },
        {
          value: "Child",
          label: "Uşaq üçün"
        },
        {
          value: "Mountain",
          label: "Dağ"
        },
        {
          value: "Folding",
          label: "Qatlana bilən"
        },
        {
          value: "fixed_gear",
          label: "Sabit ötürücü"
        },
        {
          value: "hybrid",
          label: "Hibrid"
        },
        {
          value: "electric",
          label: "ELektrik"
        },
      ]
    }
  }
}
</script>
