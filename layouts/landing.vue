<template>
  <v-app>
    <v-container fluid class="pa-0 ma-0 banner">
      <LandingNavigation />
      <slot />
      <LandingFooter />
    </v-container>
  </v-app>
</template>
<style scoped>
.banner {
  background: #151f32;
}
</style>
