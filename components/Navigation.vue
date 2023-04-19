<template>
  <v-container class="px-2">
    <v-app-bar color="#025777" flat>
      <div class="d-flex justify-space-between  w-100">
        <div class="d-flex justify-space-between w-100">
          <v-app-bar-title class="text-white pa-5"
            >Apollo Systems</v-app-bar-title
          >
          <template v-if="isMobile">
            <v-icon
              @click="drawer = !drawer"
              class="text-white align-center pr-10 ma-auto"
              >mdi-menu</v-icon
            >
          </template>
        </div>

        <div class="d-flex justify-start">
          <v-app-bar-title
            class="text-white pointer py-5"
            @click="drawer = !drawer"
            v-if="!isMobile"
            >Apps
            <v-icon v-if="!isMobile" class="text-white pointer">
              {{ drawer ? closeIcon : chevronDownIcon }}
            </v-icon>
          </v-app-bar-title>
        </div>
      </div>
    </v-app-bar>
  </v-container>

  <v-navigation-drawer
    app
    v-model="drawer"
    location="top"
    disable-resize-watcher
  >
    <!--Dropdown Menu-->
    <dropdown />
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";

const drawer = ref(false);
const isMobile = ref(false);
const chevronDownIcon = "mdi-chevron-down";
const closeIcon = "mdi-close";

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
