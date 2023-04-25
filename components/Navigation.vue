<template>
  <v-container class="pl-15">
    <v-app-bar class="bg-primary" flat>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="d-flex justify-spae-between ma-auto">
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
        </v-col>
        <v-col>
          <div class="d-flex">
            <v-app-bar-title
              class="text-white pointer py-5"
              @click="drawer = !drawer"
              v-if="!isMobile"
              >Apps
              <v-icon v-if="!isMobile" class="text-white pointer" size="small">
                {{ drawer ? closeIcon : chevronDownIcon }}
              </v-icon>
            </v-app-bar-title>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-container>

  <v-navigation-drawer
    app
    v-model="drawer"
    location="top"
    disable-resize-watcher
    temporary
  >
    <!--Dropdown Menu-->
    <div class="d-flex justify-space-around flex-lg-row flex-column">
      <Finance />
      <Sale />
      <HumanResource />
      <Inventory />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";


const drawer = ref(false);
const isMobile = ref(false);

// hamburger menu in small screen
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
