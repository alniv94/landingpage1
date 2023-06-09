<template>
  <v-container class="overflow-hidden">
    <div class="d-flex align-center justify-center">
      <a
        href="/login"
        class="hidden-md-and-up text-decoration-none text-light-blue-darken-3 text-h6"
      >
        Sign in
      </a>
    </div>

    <v-row no-gutters>
      <v-col v-for="(product, k) in products" :key="k" cols="12" md="3">
        <v-list class="ma-3">
          <v-list-subheader active-class="bg-red">
            <span class="text-h6 text-light-blue-accent-4">{{ k }}</span>
          </v-list-subheader>
          <v-divider />
          <v-list-item
            v-for="(item, i) in product"
            :key="i"
            link
            :to="item.link"
            active-class="bg-red"
          >
            <v-list-item-title link>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const products = {
  Finance: [
    {
      title: "Accounting",
      link: "/apps/accounting",
    },
    {
      title: "Invoicing",
      link: "/apps/invoicing",
    },
    {
      title: "Expenses",
      link: "/apps/expenses",
    },
  ],
  Inventory: [
    {
      title: "Logistics",
      link: "/apps/logistics",
    },
    {
      title: "Inventory",
      link: "/apps/inventory",
    },
    {
      title: "Production Control",
      link: "/apps/production-control",
    },
  ],
  Website: [
    {
      title: "Website",
      link: "/apps/website",
    },
    {
      title: "Ecommerce",
      link: "/apps/ecommerce",
    },
  ],
  Sales: [
    {
      title: "CRM",
      link: "/apps/crm",
    },
    {
      title: "Sales",
      link: "/apps/sales",
    },
    {
      title: "Point of Sales",
      link: "/apps/point-of-sale",
    },
  ],
  " Human Resources": [
    {
      title: "Employees",
      link: "/apps/employees",
    },
    {
      title: "Recruitment",
      link: "/apps/recruitment",
    },
    {
      title: "Administration",
      link: "/apps/admin",
    },
  ],
};
</script>
