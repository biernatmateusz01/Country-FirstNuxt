// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//   colorMode: {
//     classSufix: "",
//   },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/color-mode"],
});
