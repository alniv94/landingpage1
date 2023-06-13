<template>
  <v-container class="mt-5">
    <p
      v-slide-up:duration="500"
      class="text-h4 text-white text-center my-10 pb-10"
    >
      Tailored
      <strong class="text-light-blue-accent-2">apps</strong>
      for every need
    </p>
    <v-row class="d-flex justify-lg-space-between justify-sm-center flex-wrap">
      <v-col v-for="(product, k) in products" :key="k" cols="12" sm="6" lg="4">
        <div class="d-flex flex-column align-center mb-10 mx-2">
          <p class="text-h6 mb-4 text-light-blue-accent-2">{{ k }}</p>
          <v-list
            class="d-flex flex-wrap justify-space-between overflow-hidden products"
          >
            <v-list-item
              v-for="(item, index) in product"
              :key="index"
              v-stagger:duration="50"
              class="text-center mb-5 text-white product"
              :to="item.link"
            >
              <Icon :name="item.icon" :size="smAndDown ? '3em' : '4em'" />
              <p class="text-body-2 font-weight-medium wrap">
                {{ item.title }}
              </p>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
const { vSlideUp, vStagger } = useAnimation();

const { smAndDown } = useDisplay();

const products = {
  Finance: [
    {
      title: "Accounting",
      icon: "mdi:cash-register",
      link: "/apps/accounting",
    },
    {
      title: " Invoicing",
      icon: "mdi:cash-multiple",
      link: "/apps/invoicing",
    },
    {
      title: "Expenses",
      icon: "mdi:cash-refund",
      link: "/apps/expenses",
    },
  ],
  Inventory: [
    {
      title: "Logistics",
      icon: "iconoir:delivery-truck",
      link: "/apps/logistics",
    },
    {
      title: "Inventory ",
      icon: "streamline-emojis:package",
      link: "/apps/inventory",
    },
    {
      title: "Production Control",
      icon: "ph:factory",
      link: "/apps/production-control",
    },
  ],
  Manufacturing: [
    {
      title: "Website",
      icon: "mdi:web",
      link: "/apps/website",
    },
    {
      title: "Ecommerce",
      icon: "twemoji:shopping-cart",
      link: "/apps/ecommerce",
    },
  ],
  Sales: [
    {
      title: "POS",
      icon: "mdi-cart-arrow-down",
      link: "/apps/point-of-sale",
    },
    {
      title: "CRM",
      icon: "mdi-account-group",
      link: "/apps/crm",
    },
    {
      title: "Sales",
      icon: "mdi-chart-areaspline",
      link: "/apps/sales",
    },
  ],
  "Human Resource": [
    {
      title: "Employee",
      icon: "mdi-account-circle",
      link: "/apps/employees",
    },
    {
      title: "Recruitment",
      icon: "ic:sharp-person-search",
      link: "/apps/recruitment",
    },
    {
      title: "Benefits Administration",
      icon: "mdi-heart-outline",
      link: "/apps/admin",
    },
  ],
};
</script>
<style scoped>
.products {
  background-color: #151f32;
}
/* .product:hover {
  transform: scale(1.2);
  transition: ease 0.5s;
  background-color: blue !important;
} */

.product {
  max-width: 150px;
}
</style>
