// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@mdi/font/css/materialdesignicons.min.css","vuetify/styles/main.css"],
    build: {
        transpile: ["vuetify"]
    },
    components: {
        global: true,
        dirs: [
            '~/components/',
           
        ]
    },
    modules: ['@vueuse/motion/nuxt','nuxt-icon'],
    
    
    
})
