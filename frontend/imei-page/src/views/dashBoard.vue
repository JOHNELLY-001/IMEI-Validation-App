<template>
  <div class="min-h-screen flex flex-col items-center p-4 bg-linear-to-b from-gray-700 to-amber-50">
    <h1 class="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 mt-6 text-accent text-white font-serif">IMEI Info Dashboard</h1>

    <p class="max-w-3xl text-center text-gray-200 mb-6">
  Your phone has a digital identity  and it tells a powerful story.
  Check your IMEI to uncover device trustworthiness, network strength,
  authenticity status, and hidden risks before they cost you money.
  Secure your device’s future with professional-grade intelligence trusted
  by buyers, sellers, enterprises, and insurers.
</p>

<div class="flex gap-3 mb-8">
  <span class="px-4 py-2 bg-green-600/30 border border-green-400 rounded-full text-green-300 text-xs lg:text-sm">
    ✔ Trusted Insights
  </span>
  <span class="px-4 py-2 bg-blue-600/30 border border-blue-400 rounded-full text-blue-300 text-xs lg:text-sm">
    ✔ Real Network Analysis
  </span>
  <span class="px-4 py-2 bg-yellow-600/30 border border-yellow-400 rounded-full text-yellow-300 text-xs lg:text-sm">
    ✔ Authenticity Protection
  </span>
</div>

<!-- CTA Button -->
<router-link
  to="/payment"
  class="animate-pulse px-6 py-3 bg-linear-to-r from-green-500 to-blue-500 
         text-white rounded-lg shadow-lg hover:from-green-600 hover:to-blue-600
         transition-all duration-300 inline-block"
>
  Get Started - Only 50 Tsh
</router-link>


<!-- Tech Trends Section -->
<TechTrends />

    <!-- <Home /> -->
  </div>
</template>

<script>
import Home from '../views/Home.vue'
import TechTrends from '../components/techTrends.vue'


export default { components: { Home, TechTrends } }
</script>
