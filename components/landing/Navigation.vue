<template>
  <v-container>
    <v-app-bar
      :class="drawer ? 'bg-grey-lighten-5' : 'nav'"
      elevation="0"
      scroll-behavior="hide"
      scroll-threshold="160"
    >
      <v-app-bar-title class="d-flex justify-center align-center">
        <a href="/" class="d-flex align-center text-white text-decoration-none">
          <v-img src="./img/landing/hero/logo.png" width="40" height="40" />
          <p :class="drawer ? 'text-black' : 'text-white'">Apollo System</p>
        </a>
      </v-app-bar-title>
      <v-spacer />
      <v-app-bar-title
        :class="[
          'pointer d-none d-md-block',
          drawer ? 'text-black' : 'text-grey-lighten-5',
        ]"
        @click="drawer = !drawer"
      >
        Apps
        <Icon
          :name="drawer ? 'mdi-close' : 'mdi-chevron-down'"
          :class="['pointer', drawer ? 'text-black' : 'text-grey-lighten-5']"
        />
      </v-app-bar-title>

      <v-spacer />
      <v-app-bar-title class="hidden-sm-and-down">
        <a href="/login" class="text-decoration-none text-light-blue-accent-2"
          >Sign in</a
        >
      </v-app-bar-title>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>
  </v-container>
  <v-navigation-drawer
    v-model="drawer"
    location="top"
    temporary
    disable-resize-watcher
    style="height: 500px"
    class="bg-grey-lighten-5"
  >
    <LandingDropdown />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false);
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.nav {
  background-color: #101a2b !important;
}
</style>
