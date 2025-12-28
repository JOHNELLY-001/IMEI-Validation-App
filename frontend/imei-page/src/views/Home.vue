<template>
  <div class="w-full max-w-2xl">
    <IMEIForm @imei-checked="handleResult" />
    <Loader v-if="loading" />
    <IMEIResult v-if="result" :data="result" />
  </div>
</template>

<script>
import IMEIForm from '../components/IMEIForm.vue'
import IMEIResult from '../components/IMEIResult.vue'
import Loader from '../components/Loader.vue'

export default {
  components: { IMEIForm, IMEIResult, Loader },
  data() {
    return { result: null, loading: false }
  },
  methods: {
    handleResult(data) {
      this.result = data
      this.loading = false
    }
  }
}
</script>
