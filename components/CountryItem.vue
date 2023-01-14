<template>
  <NuxtLink
    :to="{
      name: 'country-id-linkrewrite',
      params: {
        id: country.area,
        linkrewrite: country.name.official,
      },
    }"
  >
    <div
      class="shadow-md p-4 text-emerald-700 flex flex-col hover:bg-emerald-500 hover:text-white transition duration-300 ease-in-out"
    >
      <span>Name: {{ country.name.official }}</span>
      <span class="mt-4">Flag: {{ country.flag }}</span>
      <span class="mt-4">Region: {{ country.region }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
let i = 1;
defineProps({
  country: Object,
});
</script>
