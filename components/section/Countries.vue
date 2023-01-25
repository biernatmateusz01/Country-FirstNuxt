<template>
  <div class="bg-gray-50 dark:bg-neutral-800">
    <BaseModal v-if="modalOpen" @close-modal="closeModal">
      <div
        class="xl:h-1/2 h-3/4 w-3/4 xl:w-1/2 bg-white dark:bg-black rounded-md shadow-lg p-4"
      >
        <span class="dark:text-gray-300">{{ openCountry.name.official }}</span>

        <img
          :src="openCountry.flags.png"
          alt="flag"
          class="block m-auto mt-4"
        />

        <img :src="openCountry.img" alt="" />
      </div>
    </BaseModal>
    <div class="container block m-auto p-4 py-20">
      <!-- <input type="text" placeholder="ja" v-model="vMateusz"> -->
      <div class="flex gap-2">
        <BaseInput v-model="vFilter" :id="1" />
        <button @click="getData" class="bg-emerald-400 py-3 px-6 text-white">
          filter
        </button>
      </div>

      <div
        v-if="filtersCountries.length != 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
      >
        <CountryItem
          @click="openModal(country)"
          v-for="country in filtersCountries"
          :key="country.name"
          :country="country"
        />
      </div>
      <!-- <BaseFilters /> -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
      >
        <CountryItem
          @click="openModal(country)"
          v-for="country in countries"
          :key="country.name"
          :country="country"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const modalOpen = ref(false);
const loaderActive = ref(true);
const openCountry = ref("");
const vFilter = ref("");
const filtersCountries = ref([]);

const openModal = (country) => {
  modalOpen.value = true;
  openCountry.value = country;
};

const closeModal = () => (modalOpen.value = false);

const getData = () => {
  console.log(countries.value);
  filtersCountries.value = countries.value.filter(
    (el) => el.region.toLowerCase() === vFilter.value.toLowerCase()
  );
  console.log(vFilter.value);
  vFilter.value = "";
};

const closeLoader = () => {
  loaderActive.value = false;
};
// fetch all countries
const { data: countries } = await useFetch(
  `https://restcountries.com/v3.1/all`
);

useHead({
  title: "Countries",
});

onMounted(() => {
  setTimeout(closeLoader, 200);
});
</script>
