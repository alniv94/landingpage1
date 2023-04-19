<template>
  <v-container fluid class="pa-0 bg-grey-lighten-5" >
    <Navigation/>
    <Hero />
    <About/>
    <WhyUs/>
    <Contact/>
    <Footer/>
  </v-container>
</template>

<script setup>
import Hero from "./components/Hero.vue";

import Navigation from "./components/Navigation.vue";
import About from "./about.vue";
import WhyUs from "./whyus.vue";
import Contact from "./contact.vue";
import Footer from "./components/Footer.vue";
</script>
