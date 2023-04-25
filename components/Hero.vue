<template>
  <v-container class="px-15 bg-primary h-screen fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="7" lg="6">
        <div class="text-sm-left text-center">
          <span class="font-weight-regular text-white text-lg-h4 text-md-h4">
            Elevate Your Business with <strong>Apollo System's ERP</strong>
          </span>
          <p class="text-white font-weight-regular line-height-lg">
            Streamline operations and increase productivity with Apollo System's
            customizable and user-friendly ERP solutions for businesses of all
            sizes.
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="5" lg="6">
        <v-btn
          class="rounded-circle play-btn"
          elevation="4"
          size="x-large"
          color="green-lighten-3"
          v-ripple.center
        >
          <v-icon icon="mdi-play" />
          <v-dialog v-model="dialog" activator="parent" width="auto">
            <iframe
              width="1067"
              height="600"
              src="https://www.youtube.com/embed/AVAvFn0QPR8"
              title="Apollo Systems"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </v-dialog>
        </v-btn>
        <v-img src="../images/logo.png" width="500"> </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
</script>

<style scoped>
.play-btn {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
