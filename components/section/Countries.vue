<template>
  <div class="container block m-auto p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-20">
      <CountryItem
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
    </div>
  </div>
</template>

<script setup>
const loaderActive = ref(true);

const closeLoader = () => {
  loaderActive.value = false;
};
// fetch all countries
const { data: countries } = await useFetch(
  `https://restcountries.com/v3.1/all`
);

onMounted(() => {
  setTimeout(closeLoader, 200);
});
</script>
