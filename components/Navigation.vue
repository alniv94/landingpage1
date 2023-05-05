<template>
  <v-container>
    <v-app-bar
      class="bg-background"
      app
      elevation="0"
      scroll-behavior="hide"
      scroll-threshold="80"
    >
      <v-row>
        <v-col cols="12" sm="6">
          <div class="d-flex">
            <NuxtLink to="/" class="ml-15">
              <v-img src="./images/logo.png" width="40" height="60"></v-img
            ></NuxtLink>
            <v-app-bar-title class="text-white pt-5">
              <NuxtLink to="/" class="text-decoration-none text-white">
                Apollo System</NuxtLink
              >
            </v-app-bar-title>
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

    <v-navigation-drawer
      app
      v-model="drawer"
      location="top"
      disable-resize-watcher
      temporary
    >
      <!--Dropdown Menu-->
      <div class="d-flex justify-space-between flex-lg-row flex-column">
        <Finance />
        <Inventory />
        <Website />
        <Sale />
        <HumanResource />
      </div>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
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
