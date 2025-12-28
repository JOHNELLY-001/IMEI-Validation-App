<template>
  <div class="mt-3 grid grid-cols-2 gap-2">
    <div v-for="(value, key) in specs" :key="key">
      <strong>{{ key }}:</strong>
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default { props: ['specs'] }
</script>
