<template>
  <div class="fixed top-0 left-0 z-50">
    <div class="w-screen relative flex items-center justify-center dark:bg-black bg-emerald-500 py-3">
      <NuxtLink
        :to="{
          name: 'index',
        }"
        ><span class="text-white font-semibold">Countries App</span></NuxtLink
      >
      <BaseSwitch class="absolute right-4"/>
    </div>
    
  </div>
</template>
