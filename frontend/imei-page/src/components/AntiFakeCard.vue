<template>
  <div class="border border-neon rounded-xl p-4 bg-darkbg/60 shadow-lg mt-4">
    <h2 class="text-xl font-bold text-accent mb-2">Anti-Fake & Authenticity Check</h2>

    <div
      class="text-center py-4 rounded-lg"
      :class="badgeClass"
    >
      <p class="text-2xl font-bold">{{ statusLabel }}</p>
      <p class="text-sm opacity-80 mt-1">{{ confidenceMessage }}</p>
    </div>

    <ul class="mt-4 space-y-1 text-sm">
      <li>✔ IMEI ↔ Model Match: {{ flags.modelMatch ? "Yes" : "No" }}</li>
      <li>✔ Region Valid: {{ flags.regionValid ? "Yes" : "No" }}</li>
      <li>✔ Clone Risk Level: {{ flags.cloneRisk }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    authenticity: {
      type: Object,
      required: true,
      // Expected:
      // { status: "authentic" | "suspicious" | "fake", confidence: 0-100, flags:{} }
    }
  },
  computed: {
    statusLabel() {
      if (this.authenticity.status === "authentic") return "Authentic Device"
      if (this.authenticity.status === "suspicious") return "Suspicious Device"
      return "Likely Counterfeit"
    },
    badgeClass() {
      return {
        "bg-green-700/40 border border-green-400": this.authenticity.status === "authentic",
        "bg-yellow-700/40 border border-yellow-400": this.authenticity.status === "suspicious",
        "bg-red-700/40 border border-red-400": this.authenticity.status === "fake",
      }
    },
    flags() {
      return this.authenticity.flags || {}
    },
    confidenceMessage() {
      return `Confidence: ${this.authenticity.confidence}%`
    }
  }
}
</script>
