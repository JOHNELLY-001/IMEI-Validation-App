<template>
  <div
    class="
      max-w-4xl mx-3 my-8
      rounded-2xl
      border border-emerald-500/40
      bg-white/5
      shadow-[0_0_25px_rgba(16,185,129,0.35)]
      p-8
      text-white
    "
  >
    <!-- Header -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-extrabold tracking-wide font-serif text-gray-800">
        DEVICE VALIDATION CERTIFICATE
      </h1>

      <p class="mt-1 text-emerald-400 text-sm uppercase tracking-wider font-semibold">
        Cognitive Smart Technologies
      </p>

      <div class="mt-4">
        <img
          src="../assets/IMEI1.jpg"
          alt="Company Logo"
          class="mx-auto w-32 h-32 rounded-full border-4 border-emerald-500 shadow-lg object-cover"
        />
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-emerald-600/40 mb-6">

    <!-- Device Identity Section -->
    <div class="grid md:grid-cols-2 gap-4 mb-4 text-gray-700">
      <p class="text-lg">
        <span class="font-semibold italic text-emerald-400 text-xl">Device Brand:</span>
        {{ data.brand }}
      </p>

      <p class="text-lg">
        <span class="font-semibold italic text-emerald-400 text-xl">Device Model:</span>
        {{ data.model }}
      </p>

      <p class="text-lg">
        <span class="font-semibold italic text-emerald-400 text-xl">Device Type:</span>
        {{ data.type }}
      </p>

      <p class="text-lg">
        <span class="font-semibold italic text-emerald-400 text-xl">Name:</span>
        {{ data.name }}
      </p>
    </div>

    <!-- Important Identifiers Highlight -->
    <div
      class="mt-4 p-4 rounded-xl border border-emerald-500/40 bg-gray-50 shadow-inner text-gray-700"
    >
      <p class="text-lg mb-2">
        <span class="font-semibold italic text-emerald-300 text-xl">IMEI:</span>
        {{ data.imei }}
      </p>

      <p class="text-lg mb-2">
        <span class="font-semibold italic text-emerald-300 text-xl">TAC:</span>
        {{ data.tac }}
      </p>

      <p class="text-lg mb-2">
        <span class="font-semibold italic text-emerald-300 text-xl">Serial:</span>
        {{ data.serial }}
      </p>

      <p class="text-lg mb-2">
        <span class="font-semibold italic text-emerald-300 text-xl">Manufacturer:</span>
        {{ data.manufacturer }}
      </p>
    </div>

    <!-- Sections -->
    <div class="mt-6 space-y-6">
      <TrustScoreCard :data="data" />
      <NetworkRadarCard :data="data" />
      <AntiFakeCard :data="data" />
      <DeviceSpecs v-if="data.device_spec" :specs="data.device_spec" />
      <DeviceImage :data="data" />
    </div>
  </div>
</template>


<script>
import TrustScoreCard from './TrustScoreCard.vue'
import NetworkRadarCard from './NetworkRadarCard.vue'
import AntiFakeCard from './AntiFakeCard.vue'
import DeviceSpecs from './DeviceSpecs.vue'
import DeviceImage from './deviceImage.vue';

export default {
  props: ['data'],
  components: {
    TrustScoreCard,
    NetworkRadarCard,
    AntiFakeCard,
    DeviceSpecs,
    DeviceImage
  }
}
</script>



<!-- <template>
  <div class="bg-darkbg border border-neon rounded p-4 mt-4">
    <h2 class="text-2xl font-bold mb-2">{{ data.brand }} {{ data.model }}</h2>
    <p><strong>IMEI:</strong> {{ data.imei }}</p>
    <p><strong>TAC:</strong> {{ data.tac }}</p>
    <p><strong>Serial:</strong> {{ data.serial }}</p>
    <p><strong>Blacklist:</strong>
      <span :class="data.blacklist.status ? 'text-red-500' : 'text-green-400'">
        {{ data.blacklist.status ? 'Yes' : 'No' }}
      </span>
    </p>
    <img v-if="data.device_image" :src="data.device_image" alt="device image" class="mt-2 w-32 h-auto rounded"/>
    <DeviceSpecs v-if="data.device_spec" :specs="data.device_spec" />
  </div>
</template>

<script>
import DeviceSpecs from './DeviceSpecs.vue'
export default { props: ['data'], components: { DeviceSpecs } }
</script> -->
