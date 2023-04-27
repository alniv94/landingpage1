<template>

   <v-list class="ma-3">
     <v-list-subheader>
       <span class="text-h6 text-light-blue-lighten-1">Inventory</span>
     </v-list-subheader>
     <v-divider></v-divider>

     <v-list-item v-for="(inventory, i) in inventories" :key="i" link :to="inventory.link">
       <v-list-item-title link>
         {{ inventory.title }}
       </v-list-item-title>
     </v-list-item>
   </v-list>
 
</template>

<script setup> 
const inventories = [
{
 title: "Logistics",
 value: 1,
 link: "/apps/logistics",
},
{
 title: "Inventory",
 value: 2,
 link: "/apps/inventory",
},
{
 title: "Production Control",
 value: 3,
 link: "/apps/production-control",
},
];
</script>