
<template>
  <div class="bg-darkbg border border-neon rounded p-4 mt-4">
    <h2 class="text-2xl font-bold mb-2">{{ data.brand }} {{ data.model }}</h2>

    <TrustScoreCard :score="data.trust_score" />
    <NetworkRadarCard :radar="data.network_radar" />
    <AntiFakeCard :authenticity="data.authenticity" />

    <DeviceSpecs v-if="data.device_spec" :specs="data.device_spec" />
  </div>
</template>

<script>
import TrustScoreCard from './TrustScoreCard.vue'
import NetworkRadarCard from './NetworkRadarCard.vue'
import AntiFakeCard from './AntiFakeCard.vue'
import DeviceSpecs from './DeviceSpecs.vue'

export default {
  props: ['data'],
  components: {
    TrustScoreCard,
    NetworkRadarCard,
    AntiFakeCard,
    DeviceSpecs
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
