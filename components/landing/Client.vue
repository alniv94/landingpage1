<template>
  <section class="bg-hover my-10 py-5">
    <v-container>
      <p class="text-h4 text-center font-weight-bold">Our Top Clients</p>
      <div class="d-flex flex-lg-row flex-sm-column justify-space-between ">
        <div v-for="(image, i) in images" :key="i">
          <v-img
            :src="image.image"
            width="200"
            height="200"
            class="align-self-auto"
          >
          </v-img>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const images = [
  { image: "./images/customer/uniliver.png" },
  { image: "./images/customer/hayabusa.png" },
  { image: "./images/customer/aqua.png" },
  { image: "./images/customer/calayan.png" },
];
</script>
