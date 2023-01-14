<template>
  <div class="fixed top-0 left-0 z-50">
    <div class="w-screen flex items-center justify-center bg-emerald-400 py-3">
      <NuxtLink
        :to="{
          name: 'index',
        }"
        ><span class="text-white font-semibold">Boots Shop</span></NuxtLink
      >
    </div>
    <TheNavigation />
  </div>
</template>
