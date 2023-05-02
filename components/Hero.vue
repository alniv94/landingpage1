<template>
  <v-container
    class="px-15 bg-primary fill-height h-screen align-content-center banner"
    fluid
  >
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" sm="7" lg="6">
        <div
          class="text-sm-left text-center d-flex flex-column justify-lg-center algin-sm-end"
        >
          <span
            class="font-weight-regular text-white text-lg-h3 text-md-h3 text-sm-h4 mb-2"
          >
            Elevate Your Business with <br />
            <strong class="mt-2">Apollo System's ERP</strong>
          </span>
          <p
            class="text-white text-body-1 font-weight-regular line-height-lg mt-5"
          >
            Streamline operations and increase productivity with Apollo System's
            customizable and user-friendly ERP solutions for businesses of all
            sizes.
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="5" lg="6" class="hidden-sm-and-up position-relative d-flex">
        <v-btn
          class="rounded-circle play-btn"
          elevation="4"
          size="x-large"
          color="green-lighten-4"
          v-ripple.center
        >
        <Icon name="mdi-play" size="2em" class="text-accent"/>
        
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

        <v-img src="../images/hero1.png" height="400" >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const dialog = ref(false);
</script>

<style scoped>
/* .banner{
  background-image: url(../images/logo1.svg) ;

background-position: center center;
background-size: cover;
background-repeat: no-repeat;


} */

.play-btn {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
