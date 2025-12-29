<template>
  <div>
    <!-- Show if either exists -->
    <div v-if="data && (data.device_id || data.device_image)" class="mt-4">
      
      <!-- Device ID -->
      <div v-if="data.device_id" class="mb-2">
        <strong class="text-gray-500">Device ID:</strong>
        <span class="text-gray-400 ml-1">{{ data.device_id }}</span>
      </div>

      <!-- Device Image -->
      <div v-if="data.device_image" class="mt-2">
        <strong class="text-gray-500">Device Image:</strong>
        <div class="mt-2">
          <img
            :src="data.device_image"
            alt="Device Image"
            class="max-w-full h-auto rounded border border-gray-700"
          />
        </div>
      </div>
    </div>

    <!-- Nothing exists -->
    <div v-else class="mt-4">
      <p class="text-gray-500 italic">
        No device image or ID available.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
