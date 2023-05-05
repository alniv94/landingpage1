<template>
  <v-container
    class="px-4 px-md-15 fill-height h-screen align-content-center banner"
    fluid
  >
    <v-row class="d-flex justify-center align-center pa-5">
      <v-col cols="12" md="7" lg="6">
        <div
          class="text-sm-left text-center d-flex flex-column justify-lg-center algin-sm-end"
        >
          <p
            class="text-white font-weight-regular text-lg-h3 text-sm-h4 text-xs-h4 mb-2"
          >
            Elevate Your Business with <br />
            <span><strong class="mt-2">Apollo System's ERP</strong></span>
          </p>
          <p class="text-h6 text-white font-weight-regular line-height-lg mt-5">
            Streamline operations and increase productivity with Apollo System's
            customizable and user-friendly ERP solutions for businesses of all
            sizes.
          </p>
        </div>
        <v-btn class="mt-10 text-capitalize text-accent" size="large" color="orange">
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
            ></iframe>
          </v-dialog>
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="5"
        lg="6"
        class="position-relative d-flex justify-center"
      >
        <div class="hidden-sm-and-down"></div>
        <v-img
          src="../images/hero3.png"
          max-height="500"
          class="hidden-sm-and-down"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const dialog = ref(false);
</script>

<style scoped>
.banner {
  /* background-image: url(../images/logo1.svg) ;

background-position: center center;
background-size: cover;
background-repeat: no-repeat; */
  background: rgb(2, 87, 119);
  background: linear-gradient(
    90deg,
    rgba(2, 87, 119, 1) 18%,
    rgba(2, 145, 200, 1) 100%
  );
  border-radius: 0 0 50% 0;
}
</style>
