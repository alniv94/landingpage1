<template>
  <v-container
    class="px-4 px-md-15 fill-height h-screen align-content-center banner"
    fluid
  >
    <v-row class="d-flex justify-center align-center pa-5">
      <v-col v-fade-in cols="12" md="7" lg="6">
        <div class="text-sm-left text-center d-flex flex-column justify-center">
          <p class="text-white font-weight-regular text-h4 mb-2 mt-5 mt-sm-0">
            Elevate Your Business with
            <br />
            <span
              ><strong class="mt-2 text-h3">Apollo System's ERP</strong></span
            >
          </p>
          <p class="text-h6 text-white font-weight-regular line-height-lg mt-5">
            Streamline operations and increase productivity with Apollo System's
            customizable and user-friendly ERP solutions for businesses of all
            sizes.
          </p>
        </div>
        <v-btn
          class="mt-10 text-capitalize text-white"
          size="large"
          color="orange"
          variant="outlined"
        >
          Watch Overview

          <v-dialog v-model="dialog" activator="parent" width="auto">
            <iframe
              width="1067"
              height="600"
              src="https://www.youtube.com/embed/AVAvFn0QPR8"
              title="Apollo Systems"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </v-dialog>
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="5"
        lg="6"
        class="position-relative d-flex justify-center"
      >
        <div class="hidden-sm-and-down" />
        <v-img
          v-fade-in
          src="../img/landing/hero/hero.png"
          max-height="450"
          class="hidden-sm-and-down"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const dialog = ref(false);
const { vFadeIn } = useAnimation();
</script>

<style scoped>
.banner {
  background-color: #101a2b;
  border-radius: 0 0 50%;
}
</style>
