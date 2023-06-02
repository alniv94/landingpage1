<template>
    
    <v-list class="ma-3">
      <v-list-subheader>
        <span class="text-h6 text-red-lighten-1 ">Websites</span>
      </v-list-subheader>
      <v-divider></v-divider>

      <v-list-item
        v-for="(website, i) in websites"
        :key="i"
        link
        :to="website.link"
      >
        <v-list-item-title link>
          {{ website.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  
</template>

<script setup>
const websites = [
{
  title: "Website",
  value: 1,
  link: "/apps/website",
},
{
  title: "Ecommerce",
  value: 2,
  link: "/apps/ecommerce",
},
];
</script>