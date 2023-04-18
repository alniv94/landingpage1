<template>
  <v-app>
    <v-container fluid class="pa-0">
      <slot />
      <Footer/>
    </v-container>
    
  </v-app>
</template>

<script>

import Footer from '~/pages/components/Footer.vue';
</script>
