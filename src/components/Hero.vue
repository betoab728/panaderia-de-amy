<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- Background Video -->
    <video 
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay 
      loop 
      muted 
      playsinline
    >
      <source src="/videos/background.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

    <!-- Content -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
      <h1 class="text-5xl font-bold mb-4 drop-shadow-lg">
        Freshly Baked Every Day
      </h1>
      <p class="text-lg mb-6">
        Experience the taste of homemade perfection.
      </p>
      <button class="bg-[#D9A273] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#A45A3D] transition">
        Explore Our Menu
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>


</script>

<style>


</style>