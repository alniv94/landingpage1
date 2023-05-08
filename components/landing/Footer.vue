<template>
  <v-footer color="accent" class="d-block">
    <div class="d-flex justify-space-around w-50">
      <div>
        <h3 class="white--text ma-2">Apollo System</h3>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
      <div>
        <v-list class="bg-accent">
          <v-list-item v-for="item in items" :to="item.link">
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <div class="text-center">
      <v-divider></v-divider>
      <p>Apollo System All rights reserved</p>
    </div>
  </v-footer>
</template>

<script setup>
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

const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
