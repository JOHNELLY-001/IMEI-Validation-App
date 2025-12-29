<template>
  <div class="w-full max-w-2xl">
    <IMEIForm @submit-imei="verifyIMEI" />

    <Loader v-if="loading" />

    <IMEIResult
      v-if="result"
      :data="result"
    />

    <p v-if="error" class="text-red-400 mt-3">{{ error }}</p>
  </div>
</template>

<script>
import IMEIForm from '../components/IMEIForm.vue'
import IMEIResult from '../components/IMEIResult.vue'
import Loader from '../components/Loader.vue'

export default {
  components: { IMEIForm, IMEIResult, Loader },

  data() {
    return {
      result: null,
      loading: false,
      error: null
    }
  },

  methods: {
    async verifyIMEI(imei) {
      this.loading = true
      this.error = null
      this.result = null

      try {
        const response = await fetch('http://localhost:3000/api/verify-imei', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imei })
        })

        if (!response.ok) throw new Error('Request failed')

        const data = await response.json()
        this.result = data
      } catch (err) {
        this.error = 'Failed to fetch IMEI data'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
