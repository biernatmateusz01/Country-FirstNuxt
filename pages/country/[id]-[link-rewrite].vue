<template>
  <div class="container block m-auto p-4 xl:p-2 mb-20">
    <span>{{ countryInfs }}</span>
  </div>
</template>

<script setup>
const route = useRoute();
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
</script>
