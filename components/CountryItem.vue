<template>
  <div
    class="shadow-md p-4 dark:bg-neutral-900 cursor-pointer text-emerald-700 flex flex-col hover:bg-emerald-500 hover:text-white transition duration-300 ease-in-out"
    @click="$emit('openModal', country)"
  >
    <span class="truncate">Name: {{ country.name.official }}</span>
    <span class="mt-4">Flag: {{ country.flag }}</span>
    <span class="mt-4">Region: {{ country.region }}</span>
    <div class="mt-4 w-full  flex items-end justify-end">
      <NuxtLink
        :to="{
          name: 'country-id-linkrewrite',
          params: {
            id: country.area,
            linkrewrite: country.name.official,
          },
        }"
      >
      <span>Show more infs</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { country } = defineProps(["country"]);
</script>
