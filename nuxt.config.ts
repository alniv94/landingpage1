// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
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
  modules: ["nuxt-icon", ],
 
  

  
  
});
