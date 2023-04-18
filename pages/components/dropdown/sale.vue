<template>
       <v-card class="mx-auto" flat>
      <v-list class="ma-3">
        <v-list-subheader>
          <span class="text-h6">Sales</span>
        </v-list-subheader>
        <v-divider></v-divider>

        <v-list-item v-for="(sale, i) in sales" :key="i" link :to="sale.link">
          <v-list-item-title link>
            {{ sale.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
</template>

<script setup> 
const sales = [
  {
    title: "CRM",
    value: 1,
    link: "/apps/crm",
  },
  {
    title: "Sales",
    value: 2,
    link: "/apps/crm",
  },
  {
    title: "Point of Sales",
    value: 3,
    link: "/apps/point-of-sale",
  },
];
</script>