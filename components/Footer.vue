<template>
  <v-footer color="secondary">
    <v-row>
      <v-col cols="12">
        <h3 class="white--text mb-4 text-center">Apollo System</h3>
      </v-col>
      <v-col cols="12" md="6">
        <h4 class="white--text mb-2">About Us</h4>
        <v-list class="bg-secondary">
          <v-list-item v-for="item in items" :to="item.link" >
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <h4 class="white--text mb-2">Follow Us</h4>
        <v-icon class="mx-2" size="24" color="white">mdi-facebook</v-icon>
        <v-icon class="mx-2" size="24" color="white">mdi-twitter</v-icon>
        <v-icon class="mx-2" size="24" color="white">mdi-linkedin</v-icon>
        <v-icon class="mx-2" size="24" color="white">mdi-instagram</v-icon>
      </v-col>
    </v-row>
    <div class="">
      <p>Apollo System, All rights reserved</p>
    </div>
  </v-footer>
  
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Terms of Service",
    link: "/terms",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
]);
</script>

<style>

</style>
