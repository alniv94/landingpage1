<template>
  <v-container class="px-2">
    <v-app-bar color="#025777" flat>
    <div class="d-flex  w-100">
      
      <v-app-bar-title class="text-white pa-5"
      >Apollo Systems</v-app-bar-title>
        <v-app-bar-title
          class="text-white pointer pa-5"
          @click="drawer = !drawer"
          append-icon="mdi-chevron-down"
          v-if="!isMobile"
          >Apps </v-app-bar-title
        >
        <template v-if="isMobile">
            <v-icon  @click="drawer = !drawer" class="text-white align-center pr-10 ma-auto">mdi-menu</v-icon>
          </template>
    </div>
  </v-app-bar>
  </v-container>

  <v-navigation-drawer app v-model="drawer" location="top" disable-resize-watcher>
    <!--Dropdown Menu-->
    <dropdown />

  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";

const drawer = ref(false);
const isMobile = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768; // Adjust breakpoint as per your design
};

onMounted(() => {
  isMobile.value = window.innerWidth < 768; // Adjust breakpoint as per your design
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
