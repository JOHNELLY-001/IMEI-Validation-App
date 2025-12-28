<!-- Payment Page Component -->
 <!-- payment via mobile money -->
  <!-- fixed amount of 50Tsh -->
   <!-- Choose only one mobile money provider & enter phone number -->
    <!-- Match the home style and colora and features scheme -->
     
<template>
  <div class="min-h-screen flex flex-col items-center p-4 bg-linear-to-b from-gray-700 to-amber-50">
    <h1 class="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 mt-6 text-accent text-white font-serif">Payment Now!</h1>

    <p class="max-w-3xl text-center text-gray-200 mb-6">
      To access the full IMEI Info Dashboard, please complete your payment of 50 Tsh via Mobile Money.
    </p>

    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <label class="block mb-4">
        <span class="text-gray-700">Mobile Money Provider:</span>
        <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
          <option>M-Pesa</option>
          <option>Airtel Money</option>
          <option>Mixx-By-Yas</option>
          <option>Halopesa</option>
        </select>
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">Phone Number:</span>
        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="+255 7XX XXX XXX" />
      </label>  
        <button class="w-full bg-linear-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300">
            Pay 50 Tsh
        </button>
    </div>
    </div>
</template>


<!-- Add the logic script as for the backend folder we have -->
<script>
export default {
  name: "PaymentPage",
}
</script>