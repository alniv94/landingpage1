<template>
    <NuxtLayout>
        <NuxtPage />
        <v-container fluid>
        <Hero/>
        <Footer/>
    </v-container>

    </NuxtLayout>
   
</template>

<script setup>
    import Hero from './components/Hero.vue';
    import Footer from './components/Footer.vue';
    import Navigation from './components/Navigation.vue';
</script>

<style scoped>
*{
  padding: 0px !important;
  margin: 0;
}
</style>