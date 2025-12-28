<template>
  <div class="min-h-screen flex flex-col items-center p-6 bg-linear-to-b from-gray-700 to-amber-50">
    <h1 class="lg:text-4xl md:text-3xl text-2xl font-bold mt-6 mb-4 text-white font-serif">
      📘 IMEI Knowledge Center
    </h1>

    <div class="max-w-4xl bg-white/90 shadow-xl rounded-xl p-6 leading-relaxed text-gray-800">
      
      <!-- Introduction -->
      <p class="mb-4 font-semibold text-center">
        Every mobile device has a story, a background, and an identity. 
        That identity is carried through a special number known as the IMEI. 
        Understanding this number is more than a technical skill it is a form of digital awareness and protection. 
        Knowing your device’s IMEI helps you verify authenticity, avoid scams, protect personal investment, 
        and confidently navigate the mobile world.
      </p>

      <hr class="my-4 border-gray-300"/>

      <!-- Chapter 1 -->
      <section class="mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-2">📱 Understanding IMEI</h2>

        <p>
          The IMEI, or <strong>International Mobile Equipment Identity</strong>, is a unique 15-digit number assigned 
          to every mobile device capable of connecting to cellular networks. Think of it as a passport number for your phone 
          a digital fingerprint that distinguishes your device from millions of others across the globe. 
          This identity remains tied to the device throughout its lifetime, regardless of who owns it or which SIM card is inserted.
        </p>

        <p class="mt-2">
          Just like a vehicle has a VIN number, your phone has an IMEI. This number helps manufacturers, 
          mobile operators, security systems, and verification platforms recognize, classify, 
          and manage devices. Importantly, IMEI identifies the device not the person using it.
        </p>

        <!-- Image Section -->
        <div class="bg-gray-100 p-3 rounded mt-3 text-center text-sm">
            <img src="../assets/IMEI1.jpg" alt="imei_numbers" class="mx-auto mb-2"/>
          📷 <em>A phone with a digital fingerprint or identity badge</em>
        </div>
      </section>

      <!-- Chapter 2 -->
      <section class="mb-6">
        <h2 class="text-xl font-bold">📑 What Does an IMEI Look Like?</h2>

        <p class="mt-2">
          An IMEI is typically a 15-digit number, for example:
          <strong>490154203237518</strong>. 
          Although it may look like a random sequence, every digit has meaning. 
          The first eight digits represent the TAC (Type Allocation Code), which tells networks and systems 
          the manufacturer and model category of the device. 
          The following six digits represent the device’s unique serial identity, 
          and the final digit serves as a check digit used for mathematical validation.
        </p>

        <p class="mt-2">
          This structure allows global systems to instantly recognize what kind of device it is, 
          ensuring proper classification and trust.
        </p>

        <!-- Image Section -->
        <div class="bg-gray-100 p-3 rounded mt-3 text-center text-sm">
            <img src="../assets/IMEI2.jpg" alt="imei_diagram" class="mx-auto mb-2"/>
          📷 <em> A breakdown diagram showing TAC → Serial → Check Digit</em>
        </div>
      </section>

      <!-- Chapter 3 -->
      <section class="mb-6">
        <h2 class="text-xl font-bold">🔍 How Do You Find Your IMEI?</h2>

        <p class="mt-2">
          Finding your IMEI is simple. The most common method is dialing 
          <strong>*#06#</strong> on your device the number instantly appears on the screen. 
          It can also be found on the original phone box, under the battery for older devices, 
          or inside your phone settings under “About Phone”.
        </p>

        <div class="bg-gray-100 p-2 rounded mt-2 text-center">
          <strong>*#06#</strong>
        </div>

        <img src="../assets/IMEI3.jpg" alt="imei_check" class="mt-3 mx-auto"/>

        <p class="mt-2">
          Knowing how to retrieve your IMEI ensures you’re always prepared to verify, report, 
          or secure your device whenever necessary.
        </p>
      </section>

      <!-- Chapter 4 -->
      <section class="mb-6">
        <h2 class="text-xl font-bold">🌐  What Information Does IMEI Reveal?</h2>

        <p class="mt-2">
          IMEI helps reveal important technical and security information about a device. 
          Through trusted databases, it can reveal the brand, model, device category, 
          network compatibility (3G/4G/5G), and whether the phone has been reported as stolen or blacklisted.
        </p>

        <p class="mt-2">
          However, IMEI is not a tool for spying or invading privacy. 
          It cannot expose personal messages, phone numbers, owner names, or live locations. 
          It is purely a device intelligence identifier not a personal surveillance tool.
        </p>

        <p class="bg-green-100 p-2 rounded mt-2">
          🛡️ IMEI lookup = Device verification and safety, not spying.
        </p>
      </section>

      <!-- Final Note -->
      <h2 class="text-xl font-bold mt-6">🎯 Final Reflection</h2>

      <p class="mt-2">
        Understanding IMEI turns you from a casual phone user into an informed digital citizen. 
        It helps you make smarter buying decisions, identify fake or cloned devices, 
        protect yourself from fraud, and ensure that your device truly belongs to you. 
        In a world where mobile devices are extensions of our daily lives, 
        knowledge truly becomes protection.
      </p>

      <p class="mt-3 font-semibold">
        📘 Knowledge is protection.<br>
        📱 Your device deserves a verified identity.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "IMEIDocs"
};
</script>
