<template>
  <section class="bg-indigo-lighten-5 my-10 py-5">
    <v-container>
      <p class="text-h4 text-center font-weight-bold">Our Top Clients</p>
      <v-row class="justify-center">
        <v-col
          v-for="(image, i) in images"
          :key="i"
          class="d-flex justify-center mt-5"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-img
            v-stagger
            :src="image.image"
            max-width="200"
            height="200"
            class="align-self-auto"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { vStagger } = useAnimation();

const images = [
  { image: "../img/landing/customer/uniliver.png" },
  { image: "/img/landing/customer/hayabusa.png" },
  { image: "/img/landing/customer/aqua.png" },
  { image: "/img/landing/customer/calayan.png" },
];
</script>
