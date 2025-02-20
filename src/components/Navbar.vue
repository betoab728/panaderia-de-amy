<template>
    <nav class="bg-vanilla text-cinnamon shadow-md">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold">
          <span class="text-honey">D' AMY</span> Bakery
        </div>
  
        <!-- Navigation Links -->
        <ul class="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <a href="#" class="hover:text-caramel transition">Home</a>
          </li>
          <li>
            <a href="#" class="hover:text-caramel transition">Products</a>
          </li>
          <li>
            <a href="#" class="hover:text-caramel transition">About</a>
          </li>
          <li>
            <a href="#" class="hover:text-caramel transition">Contact</a>
          </li>
        </ul>
  
        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-cinnamon text-3xl">
          ☰
        </button>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-vanilla shadow-md">
        <ul class="flex flex-col space-y-2 text-center py-4">
          <li>
            <a href="#" class="block py-2 hover:text-caramel">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 hover:text-caramel">Products</a>
          </li>
          <li>
            <a href="#" class="block py-2 hover:text-caramel">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 hover:text-caramel">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>

<script lang="ts" setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>

<style scoped>
.bg-vanilla {
  background-color: #F5E0C3;
}
.text-cinnamon {
  color: #A45A3D;
}
.text-honey {
  color: #E1B382;
}
.hover\:text-caramel:hover {
  color: #D9A273;
}
</style>