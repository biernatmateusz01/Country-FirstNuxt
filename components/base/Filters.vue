<template>
  <div>
    <div class="w-full flex justify-end">
      <button @click="openFilters = !openFilters" class="bg-emerald-500 p-2">
        <span class="text-white">Filters</span>
      </button>
    </div>
    <div v-if="openFilters" class="mt-4 bg-emerald-500 h-32">
        Filtrowanie i renderowanie elementów po regionie (Azja, Europa, Ameryka...)
    </div>
  </div>
</template>

<script setup>
const openFilters = ref(false);
</script>
