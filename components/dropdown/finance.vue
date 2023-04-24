<template>
    
      <v-list class="ma-3">
        <v-list-subheader>
          <span class="text-h6">Finance</span>
        </v-list-subheader>
        <v-divider></v-divider>

        <v-list-item
          v-for="(finance, i) in finances"
          :key="i"
          link
          :to="finance.link"
        >
          <v-list-item-title link>
            {{ finance.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    
</template>

<script setup>
const finances = [
  {
    title: "Accounting",
    value: 1,
    link: "/apps/accounting",
  },
  {
    title: "Invoicing",
    value: 2,
    link: "/apps/invoicing",
  },
  {
    title: "Expenses",
    value: 3,
    link: "/apps/expenses",
  },
];
</script>