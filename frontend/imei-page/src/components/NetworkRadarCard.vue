<template>
  <div class="border border-neon rounded-xl p-4 bg-darkbg/60 shadow-lg mt-4">
    <h2 class="text-xl font-bold text-accent mb-2">Network Compatibility Radar</h2>

    <div class="space-y-3">
      <div v-for="item in metrics" :key="item.label">
        <div class="flex justify-between text-sm">
          <span>{{ item.label }}</span>
          <span>{{ item.value }}%</span>
        </div>

        <div class="w-full h-2 bg-gray-700 rounded">
          <div
            class="h-full rounded transition-all duration-700"
            :style="{ width: item.value + '%', background: item.color }"
          ></div>
        </div>
      </div>
    </div>

    <p class="mt-4 text-sm text-gray-300 italic">
      {{ insight }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    radar: {
      type: Object,
      required: true,
      // Expected:
      // { lte: 85, fiveg: 72, indoor: 60, regional: 95 }
    }
  },
  computed: {
    metrics() {
      return [
        { label: "LTE Support", value: this.radar.lte, color: "#0ff" },
        { label: "5G Capability", value: this.radar.fiveg, color: "#9d4dff" },
        { label: "Indoor Signal Strength", value: this.radar.indoor, color: "#4dff9d" },
        { label: "Regional Compatibility", value: this.radar.regional, color: "#ff4df7" },
      ]
    },
    insight() {
      if (this.radar.indoor < 50)
        return "Great outdoors but weak indoors — likely missing Band 28."

      if (this.radar.fiveg < 40)
        return "Limited 5G readiness — best performance on LTE networks."

      return "This device is highly compatible with your regional carriers."
    }
  }
}
</script>
