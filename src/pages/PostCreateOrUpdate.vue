<template>
  <div>
    <n-space vertical>
      <div>
        <div>Başlıq</div>
        <n-input v-model:value="value" type="text" placeholder="Daxil edin"/>
      </div>
      <div>
        <div>Qeyd:</div>
        <n-input v-model:value="value" type="textarea" placeholder="Daxil edin"/>
      </div>
      <n-space vertical>
        <div>
          <div>Ölçü:</div>
          <n-select v-model:value="value" size="medium" :options="sizeOptions" placeholder="Daxil edin"/>
        </div>
        <div>
          <div>Tip:</div>
          <n-select v-model:value="value" size="medium" :options="typeOptions" placeholder="Daxil edin"/>
        </div>
        <div>
          <div>Şəhər:</div>
          <n-auto-complete :options="cityOptions" v-model:value="value" placeholder="Daxil edin"/>
        </div>
      </n-space>
    </n-space>
    <n-button type="primary">Primary</n-button>

  </div>
</template>
<script>
import {NInput, NSpace, NSelect, NAutoComplete, NButton} from 'naive-ui'

export default {
  name: "PostCreateOrUpdate",
  components: {
    NInput,
    NButton,
    NAutoComplete,
    NSpace,
    NSelect
  },
  data() {
    return {
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
          label: "BMX"
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
      ],
      cityOptions: [
        "Baki", "Sumgayit"
      ]
    }
  }
}
</script>