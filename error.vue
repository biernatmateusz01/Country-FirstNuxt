<template>
  <div
    class="h-screen flex justify-center items-center w-screen bg-white text-xl sm:text-3xl text-emerald-400 relative"
  >
    <div
      class="h-40 w-40 bg-emerald-400 flex justify-center items-center rounded-full absolute top- 1/2 bottom-1/2 left-1/2 right-1/2"
    >
      <span class="text-white"> {{ error.statusCode }} </span>
    </div>
    <!-- <div class="flex flex-col"> -->
    <span class="mt-8">{{ error.statusMessage }}</span>
    <!-- </div> -->
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>
