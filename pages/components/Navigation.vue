<template>
  <v-app-bar color="#025777" flat>
    <div class="d-flex  w-100">
      <v-app-bar-title class="text-white pa-5">Apollo Systems</v-app-bar-title>
        <v-app-bar-title
          class="text-white pointer pa-5"
          @click="drawer = !drawer"
          append-icon="mdi-chevron-down"
          >Apps</v-app-bar-title
        >
    </div>
  </v-app-bar>
  <v-navigation-drawer app v-model="drawer" location="top" disable-resize-watcher>
    <!--Dropdown Menu-->
    <dropdown />

  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";

const drawer = ref(false);
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
