<template>
  <v-container fluid class="pa-0">
    <Navigation/>
    <Hero />
    <About/>
    <WhyUs/>
  </v-container>
</template>

<script setup>
import Hero from "./components/Hero.vue";

import Navigation from "./components/Navigation.vue";
import About from "./components/About.vue";
import WhyUs from "./why-us.vue";
</script>
