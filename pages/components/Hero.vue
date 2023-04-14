<template>
  <section class="banner-wrapper">
    <v-container class="px-2">
      <v-row justify="center">
        <v-col cols="12" sm="7" lg="6" class="d-flex align-center">
          <div class="text-sm-left text-center">
            <h1 class="banner-title font-weight-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              nesciunt!
            </h1>
            <h4 class="banner-subtitle white--text font-weight-regular">
              Lorem ipsum dolor sit amet.
            </h4>
            <div class="mt-md-16 mt-10 d-sm-flex d-block">
              <Modal />
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="5" lg="6">
          <!-- <v-img :src="require('/images/logo.png')" alt="banner" class="img-fluid" aspect-ratio="1"/> -->
          <img src="/images/logo.png" alt="logo">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>

import Modal from "./Modal.vue";
</script>

<style scoped>
.banner-title {
  font-size: 42px;
  line-height: 54px;
  margin: 20px 0 15px;
}

.banner-subtitle {
  font-size: 21px;
}

.banner-wrapper {
  background: rgb(165, 214, 167);
  background: radial-gradient(
    circle,
    rgba(165, 214, 167, 1) 18%,
    rgba(56, 185, 36, 1) 100%,
    rgba(36, 185, 61, 1) 100%
  );
  padding: 20px 0 20px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  max-width: 100%;
}

@media (max-width: 767px) {
  .banner-title {
    font-size: 29px;
    line-height: 40px;
  }
  .banner-wrapper {
    padding: 90px 0 20px;
  }
}
</style>
