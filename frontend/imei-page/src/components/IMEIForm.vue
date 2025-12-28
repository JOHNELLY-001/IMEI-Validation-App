<template>
  <div class="flex gap-2 mb-4">
    <input
      v-model="imei"
      type="text"
      placeholder="Enter 15-digit IMEI"
      maxlength="15"
      @input="validateIMEI"
      class="flex-1 p-2 rounded border border-neon text-neon text-green-600"
    />
    <button
      :disabled="!isValid"
      @click="submitIMEI"
      class="px-3 py-2 bg-green-300 hover:bg-white rounded-lg disabled:opacity-50"
    >
      Check
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { imei: '', isValid: false }
  },
  methods: {
    validateIMEI() {
      this.isValid = /^\d{15}$/.test(this.imei)
    },
    async submitIMEI() {
      this.$emit('imei-checked', null) // clear previous
      try {
        const res = await fetch('http://localhost:3000/api/verify-imei', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imei: this.imei }),
        })
        const data = await res.json()
        this.$emit('imei-checked', data)
      } catch (err) {
        this.$emit('imei-checked', { error: 'Failed to fetch data' })
      }
    }
  }
}
</script>
