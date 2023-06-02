// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@mdi/font/css/materialdesignicons.min.css", "vuetify/styles/main.css", 'animate.css/animate.min.css'],
  build: {
    transpile: ["vuetify"],
  },
  
  components: [
    {
      global: true,
      path: "~/components/",
      pathPrefix: false,
    },
  ],
  modules: ["nuxt-icon",],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],

  
  
});
