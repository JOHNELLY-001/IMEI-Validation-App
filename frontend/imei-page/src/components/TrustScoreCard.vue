<template>
  <div class="border border-neon rounded-xl p-4 bg-darkbg/60 shadow-lg">
    <h2 class="text-xl font-bold text-accent mb-2">Device Trust Score</h2>

    <div class="flex items-center gap-6">
      <div class="relative">
        <svg width="140" height="140">
          <circle
            cx="70"
            cy="70"
            r="60"
            stroke="#222"
            stroke-width="10"
            fill="none"
          />
          <circle
            cx="70"
            cy="70"
            r="60"
            :stroke="ringColor"
            stroke-width="10"
            fill="none"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeOffset"
            class="transition-all duration-700"
          />
        </svg>
        <span class="absolute inset-0 flex justify-center items-center text-3xl font-bold text-neon">
          {{ score }}
        </span>
      </div>

      <div>
        <p class="text-lg font-semibold">{{ riskLabel }}</p>
        <p class="text-sm text-gray-300 mt-2">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { score: { type: Number, required: true } },
  computed: {
    circumference() { return 2 * Math.PI * 60 },
    percentage() { return Math.min(Math.max(this.score, 0), 100) },
    strokeOffset() {
      return this.circumference - (this.percentage / 100) * this.circumference
    },
    ringColor() {
      if (this.score >= 80) return "#00ff9c"
      if (this.score >= 50) return "#ffd34d"
      return "#ff4e4e"
    },
    riskLabel() {
      if (this.score >= 80) return "Low Risk"
      if (this.score >= 50) return "Moderate Risk"
      return "High Risk"
    },
    message() {
      if (this.score >= 80) return "This device shows stable identity & trustworthy behavior."
      if (this.score >= 50) return "Some inconsistencies detected — review recommended."
      return "High anomaly profile — proceed cautiously."
    }
  }
}
</script>
