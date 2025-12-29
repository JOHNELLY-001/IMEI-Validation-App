<template>
  <div class="border border-green-400 rounded p-4 mt-4">
    <h3 class="text-xl font-bold mb-2 text-green-500">Trust Score</h3>

    <div class="text-4xl font-bold"
         :class="scoreColor">
      {{ trustScore }}%
    </div>

    <!-- Is DEVICE blacklisted? -->
    <p class="mt-2 text-gray-400">{{ data.blacklist?.status ? "⚠️ Device is blacklisted" : "✅ Device is not blacklisted" }}</p>
    <p class="mt-2 text-gray-400">{{ trustMessage }}</p>
  </div>
</template>

<script>
export default {
  props: ['data'],

  computed: {
    trustScore() {
      if (this.data.blacklist?.status) return 20
      if (!this.data.brand) return 60
      return 90
    },

    trustMessage() {
      if (this.data.blacklist?.status) return "⚠️ Device reported or blacklisted"
      if (!this.data.brand) return "ℹ️ Limited manufacturer records found"
      return "✅ Device appears legitimate with trusted identity"
    },

    scoreColor() {
      if (this.trustScore >= 80) return "text-green-400"
      if (this.trustScore >= 50) return "text-yellow-300"
      return "text-red-400"
    }
  }
}
</script>
