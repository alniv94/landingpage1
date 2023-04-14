<template>
    <v-container>
      
        <Hero/>
        <Footer/>
    </v-container>
    
</template>

<script setup>
    import Hero from './components/Hero.vue';
    import Footer from './components/Footer.vue';
    import Navigation from './components/Navigation.vue';
</script>

<style>
*{
  margin: 0 !important;
  padding: 0px !important;
}

.v-container {
    max-width: 100%;
}
</style>