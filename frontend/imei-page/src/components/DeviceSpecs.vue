<template>
  <div class="border border-gray-600 rounded p-4 mt-4">
  <!-- Title -->
  <h3 class="text-xl font-bold mb-2  text-gray-600">Device Specifications</h3>
  <div class="mt-3 grid grid-cols-2 gap-2">
    <div
      v-for="(value, key) in cleanedSpecs"
      :key="key"
      class="p-2 bg-black/20 rounded border border-gray-700"
    >
      <strong class="text-gray-500">{{ formatKey(key) }}:</strong>
      <span class="text-gray-500 ml-1">
        {{ value ? value : 'Not available' }}
      </span>
    </div>
  </div>
</div>
  </template>

  
<script>
export default {
  props: ['specs'],

  computed: {
    cleanedSpecs() {
      if (!this.specs) return {}

      let filtered = {}

      Object.entries(this.specs).forEach(([key, val]) => {
        if (
          val !== null &&
          val !== '' &&
          val !== 'unknown' &&
          val !== undefined
        ) {
          filtered[key] = val
        }
      })

      return filtered
    }
  },

  methods: {
    formatKey(key) {
      const map = {
        sim: 'SIM Type',
        sim_slots: 'SIM Slots',
        os: 'Operating System',
        os_family: 'OS Family',
        wlan: 'Wi-Fi',
        usb: 'USB',
        bluetooth: 'Bluetooth',
        nfc: 'NFC',
        speed: 'Network Speed',
        nettech: 'Network Tech'
      }

      return map[key] || key.replace(/_/g, ' ').toUpperCase()
    }
  }
}
</script>
