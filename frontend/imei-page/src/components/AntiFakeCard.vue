<template>
  <div class="border border-red-300 rounded p-4 mt-4">
    <h3 class="text-xl font-bold mb-2 text-red-400">Anti-Fake Detector</h3>

    <p class="text-xl font-bold"
       :class="statusColor">
       <!-- Star label -->
        <span class="text-yellow-400">★</span>
      {{ statusLabel }}
    </p>

    <p class="mt-2 text-gray-400"><span class="text-gray-600 font-semibold">Remarks:</span> {{ statusMessage }}</p>
  </div>
</template>

<script>
export default {
  props: ['data'],

  computed: {
    isSuspicious() {
      return !this.data.manufacturer || !this.data.model
    },

    statusLabel() {
      return this.isSuspicious ? "Potential Clone / Unknown" : "Genuine Identity"
    },

    statusMessage() {
      if (this.isSuspicious)
        return "IMEI exists but lacks solid manufacturer identity. Cross-verify before purchase."
      
      return "Device identity matches known manufacturer records."
    },

    statusColor() {
      return this.isSuspicious ? "text-yellow-300" : "text-green-400"
    }
  }
}
</script>
