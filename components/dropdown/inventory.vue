<template>
    <v-card class="mx-auto" flat>
   <v-list class="ma-3">
     <v-list-subheader>
       <span class="text-h6">Inventory</span>
     </v-list-subheader>
     <v-divider></v-divider>

     <v-list-item v-for="(inventory, i) in inventories" :key="i" link :to="inventory.link">
       <v-list-item-title link>
         {{ inventory.title }}
       </v-list-item-title>
     </v-list-item>
   </v-list>
 </v-card>
</template>

<script setup> 
const inventories = [
{
 title: "Inventory",
 value: 1,
 link: "/apps/inventory",
},
{
 title: "Manufacturing",
 value: 2,
 link: "/apps/manufacturing",
},
{
 title: "Purchase",
 value: 3,
 link: "/apps/purchase",
},
];
</script>