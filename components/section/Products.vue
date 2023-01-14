<template>
  <div class="container block m-auto mt-20">
    <!-- <BaseLoader v-if="loaderActive"/> -->
    <div class="w-full mb-4 flex justify-between">
      <!-- <span>Wszystkich produktów: </span>
      <span class="text-emerald-400">{{ products.length }}</span> -->
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CountryItem
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
    </div>
  </div>
</template>

<script setup>
const countries = ref([]);

const loaderActive = ref(true);

const closeLoader = () => {
  loaderActive.value = false;
};

const getData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((res) => {
      // const searcedElement = res.filter((el) => el.region === "Europe");
      //add filters in the future if will be possible
      countries.value = res;
    });
};

//const addIdToCountries = () => {
//in the futute if will be possible we will add id's to every element in countries array by forEach funcion
// if (countries) {
//   countries.value.forEach((el) => {
//     console.log(el);
//   });
// }
//};

onMounted(() => {
  setTimeout(closeLoader, 900);
  getData();
});
</script>
