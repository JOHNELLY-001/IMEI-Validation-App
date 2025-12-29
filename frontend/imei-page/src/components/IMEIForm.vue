<template>
  <div class="flex gap-2 mb-4 mt-6 px-6 ">
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
      @click="$emit('submit-imei', imei)"
      class="px-3 py-2 bg-green-700 hover:bg-green-400 rounded-lg disabled:opacity-50 text-white"
    >
      Check
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imei: '',
      isValid: false
    }
  },
  methods: {
    validateIMEI() {
      this.isValid = /^\d{15}$/.test(this.imei)
    }
  }
}
</script>
