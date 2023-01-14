<template>
  <div class="container block m-auto p-4 xl:p-0 mb-20">
    <BaseLoader v-if="loaderActive" />
    <span>{{ countryInfs }}</span>
    <!-- <div class="p-4 h-full max-w-[450px] shadow-2xl rounded-md block m-auto">
      <div class="flex flex-col items-center">
        <span class="block m-auto text-xl font-semibold">{{countryInfs}}</span>
        <img
          src="https://sklep.sizeer.com/media/cache/gallery/rc/8bjiqwq7/nike-air-max-90-ltr-gs-mlodziezowe-sneakersy-czarny-cd6864-022.jpg"
          alt=""
          class="mt-4"
        />
        <span class="mt-4 text-xl font-semibold">Nike - model</span>
        <span class="mt-4 text-xl font-semibold">Buty męskie</span>

        <div class="w-full mt-4 flex justify-center gap-4">
          <span class="line-through text-red-600">399.99 zł</span>
          <span class="text-emerald-400">249.99 zł</span>
        </div>

        <div class="grid grid-cols-2 mt-4 gap-4">
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/619f4371-99ff-44cd-8b13-6c2e699e90c1/buty-meskie-air-force-1-07-Pbt0tj.png"
            alt=""
          />
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dce93a1d-ebcb-4300-b8cf-f71da0820ea1/buty-meskie-air-force-1-07-Pbt0tj.png"
            alt=""
          />
        </div>
        <div class="mt-4">
          <button
            @click="addToCart(el)"
            class="bg-emerald-400 px-4 py-2 text-white text-lg transition duration-300 ease-in-out border border-white hover:border-emerald-400 hover:text-emerald-400 hover:rounded-md hover:bg-white"
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
const route = useRoute();
const loaderActive = ref(true);
const country = ref("");
const countryInfs = ref([]);

const getMyCountries = () => {
  console.log(country.value)
  fetch(`https://restcountries.com/v3.1/name/${country.value}`)
    .then((res) => res.json())
    .then((res) => {
      countryInfs.value = res;
      console.log(res);
    });
};

const closeLoader = () => {
  loaderActive.value = false;
};

onMounted(() => {
  country.value = route.params.linkrewrite;
  setTimeout(closeLoader, 5000);
  getMyCountries();
});
</script>
