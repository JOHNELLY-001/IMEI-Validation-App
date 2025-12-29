<template>
  <div class="border border-blue-400 rounded p-4 mt-4">
    <h3 class="text-xl font-bold mb-2 text-blue-500">Network Compatibility Radar</h3>

    <!-- Bands Count -->
    <p class="text-gray-400">
      Supported Bands: <strong>{{ totalBands }}</strong>
    </p>

    <!-- GENERATION SUPPORT -->
    <div class="mt-4">
      <h4 class="font-semibold text-blue-300 mb-1">Cellular Technology Support</h4>

      <p :class="supportClass(genSupport.g2)">
        2G (GSM): {{ genSupport.g2 ? 'Supported' : 'Not Supported' }}
      </p>

      <p :class="supportClass(genSupport.g3)">
        3G (WCDMA/UMTS): {{ genSupport.g3 ? 'Supported' : 'Not Supported' }}
      </p>

      <p :class="supportClass(genSupport.g4)">
        4G LTE: {{ genSupport.g4 ? 'Supported' : 'Not Supported' }}
      </p>
    </div>

    <!-- CARRIER CHECK -->
    <div class="mt-4">
      <h4 class="font-semibold text-blue-300 mb-1">Tanzania Carrier Compatibility</h4>

      <p :class="supportClass(carriers.tigo)">YAS</p>
      <p :class="supportClass(carriers.vodacom)">Vodacom</p>
      <p :class="supportClass(carriers.airtel)">Airtel</p>
      <p :class="supportClass(carriers.halotel)">Halotel</p>
    </div>

    <!-- Frequencies List -->
    <h4 class="font-semibold text-blue-300 mt-4">Frequency Bands</h4>
    <ul class="mt-2 text-gray-400 list-disc pl-4 max-h-40 overflow-y-auto">
      <li v-for="(band, index) in data.frequency" :key="index">
        {{ band }}
      </li>
    </ul>

    <!-- Insight -->
    <p class="mt-4 text-sm text-gray-500 italic">
      {{ insight }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['data'],

  computed: {
    totalBands() {
      return this.data.frequency?.length || 0
    },

    freq() {
      return this.data.frequency || []
    },

    // ---------- NETWORK GENERATIONS ----------
    genSupport() {
      return {
        g2: this.freq.some(f => f.includes('GSM')),
        g3: this.freq.some(f => f.includes('WCDMA')),
        g4: this.freq.some(f => f.includes('LTE')),
      }
    },

    // ---------- CARRIER MAPPING ----------
    carriers() {
      const bands = this.freq.join(' ')

      return {
        // Based on most deployed Tanzania bands
        tigo: bands.match(/BAND 3|BAND 1|BAND 20|BAND 28/i),
        vodacom: bands.match(/BAND 3|BAND 20|BAND 1/i),
        airtel: bands.match(/BAND 3|BAND 8|BAND 1/i),
        halotel: bands.match(/BAND 3|BAND 8|BAND 41/i),
      }
    },

    insight() {
      if (!this.genSupport.g4) return "Device may struggle on modern networks — lacks 4G LTE support."
      if (!this.carriers.vodacom && !this.carriers.tigo && !this.carriers.airtel) 
        return "Device has LTE but bands do not fully match major Tanzania carriers."

      return "This device is broadly compatible with Tanzania networks and should perform well."
    }
  },

  methods: {
    supportClass(isSupported) {
      return isSupported
        ? "text-green-400 font-semibold"
        : "text-red-400"
    }
  }
}
</script>
