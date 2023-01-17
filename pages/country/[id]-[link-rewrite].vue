<template>
  <div
    class="bg-neutral-50 dark:bg-neutral-800 min-h-screen dark:text-emerald-300"
  >
    <div
      class="container block m-auto p-4 py-20 text-base sm:text-lg xl:text-xl"
    >
      <BaseLoader v-if="openLoader" />
      <div class="flex flex-col gap-2">
        <div
          class="w-full flex gap-4 justify-between border-b border-emerald-500 p-2"
        >
          <span>Name:</span>
          <span class="truncate">{{ countryInfs[0].name.official }}</span>
        </div>
        <div
          class="w-full flex justify-between border-b border-emerald-500 p-2"
        >
          <span>Capital:</span>

          <div class="flex flex-col gap-1">
            <span v-for="capital in countryInfs[0].capital" :key="capital">{{
              capital
            }}</span>
          </div>
        </div>
        <div
          class="w-full flex justify-between border-b border-emerald-500 p-2"
        >
          <span>Region:</span>
          <span>{{ countryInfs[0].region }}</span>
        </div>

        <div
          class="w-full flex justify-between border-b border-emerald-500 p-2"
        >
          <span>Subregion:</span>
          <span>{{ countryInfs[0].subregion }}</span>
        </div>

        <div
          class="w-full flex justify-between border-b border-emerald-500 p-2"
        >
          <span>Flag:</span>
          <span>{{ countryInfs[0].flag }}</span>
        </div>
        <div
          class="w-full flex justify-between border-b border-emerald-500 p-2"
        >
          <span>Population:</span>
          <span>{{ countryInfs[0].population }}</span>
        </div>
        <div
          class="w-full flex justify-between border-b border-emerald-500 p-2"
        >
          <span>TimeZones:</span>
          <div class="flex flex-col gap-1">
            <span v-for="zones in countryInfs[0].timezones" :key="zones">{{
              zones
            }}</span>
          </div>
        </div>

        <img
          :src="countryInfs[0].flags.png"
          alt="flag"
          class="block m-auto w-1/5 mt-4"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const modalOpen = ref(true);
const route = useRoute();
const openLoader = ref(true);
// fetch special country
const url = "https://restcountries.com/v3.1/name/" + route.params.linkrewrite;

const { data: countryInfs } = await useFetch(url);

if (!countryInfs.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Country not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "country",
});

useHead({
  title: route.params.linkrewrite,
});

const closeModal = () => {
  modalOpen.value = false;
  console.log("zamykamy");
};

const openModal = () => {
  console.log("open modal");
};

const closeLoader = () => {
  openLoader.value = false;
};

onMounted(() => {
  setTimeout(closeLoader, 800);
});
</script>
