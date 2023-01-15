<template>
  <div
    class="h-screen flex justify-center items-center w-screen bg-white text-xl sm:text-3xl text-emerald-400 relative"
  >
    <div
      class="h-40 w-40 lg:h-72 lg:w-72 bg-emerald-400 flex justify-center items-center rounded-full absolute top- 1/2 bottom-1/2 left-1/2 right-1/2"
    >
      <div class="flex flex-col">
        <span class="text-white"> {{ error.statusCode }} </span>
        <NuxtLink
          :to="{
            name: 'index',
          }"
        >
          <button class="text-emerald-400 p-2 rounded-sm bg-white">
            Go to home page
          </button>
        </NuxtLink>
      </div>
    </div>
    <!-- <div class="flex flex-col"> -->
    <span class="mt-8">{{ error.statusMessage }}</span>
    <!-- </div> -->
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>
