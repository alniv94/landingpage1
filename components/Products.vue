<template>
  <v-container class="mt-15">
    <p class="text-h4 text-accent text-center my-5 pa-5">
      Tailored <strong>apps</strong> for every need
    </p>

    <div
      class="d-flex flex-wrap justify-lg-space-between flex-lg-row flex-sm-column justify-sm-center align-sm-center"
    >
      <div class="d-flex flex-column align-center mb-10">
        <p class="text-h6 mb-4 text-accent">Manage Your Finances</p>

        <v-list class="d-flex flex-wrap justify-space-between bg-background">
          <v-list-item
            v-for="(product, index) in financeProducts"
            :key="index"
            class="text-center mb-5"
            :to="product.link"
            link
          >
            <Icon :name="product.icon" size="4em" />
            <p class="text-body-2 font-weight-medium">
              {{ product.title }}
            </p>
          </v-list-item>
        </v-list>
      </div>

      <div class="d-flex flex-column align-center mb-10">
        <p class="text-h6 mb-4 text-accent">Logistics and Manafacturing Operation</p>

        <v-list class="d-flex flex-wrap justify-space-between bg-background">
          <v-list-item
            v-for="(product, index) in supplyChainProducts"
            :key="index"
            class="text-center mb-5"
            :to="product.link"
            link
          >
            <Icon :name="product.icon" size="4em" />
            <p class="text-body-2 font-weight-medium">
              {{ product.title }}
            </p>
          </v-list-item>
        </v-list>
      </div>

      <div class="d-flex flex-column align-center mb-10">
        <p class="text-h6 mb-4 text-accent">Build Website</p>
        <v-list class="d-flex flex-wrap justify-space-between bg-background">
          <v-list-item
            v-for="(product, index) in manufacturingProducts"
            :key="index"
            class="text-center mb-5"
            :to="product.link"
            link
          >
            <Icon :name="product.icon" size="4em" />
            <p class="text-body-2 font-weight-medium">
              {{ product.title }}
            </p>
          </v-list-item>
        </v-list>
      </div>

      <div class="d-flex flex-column align-center mb-10">
        <p class="text-h6 mb-4 text-accent">Boost Sales Productivity</p>
        <v-list class="d-flex flex-wrap justify-space-between bg-background">
          <v-list-item
            v-for="(product, index) in salesProducts"
            :key="index"
            class="text-center mb-5"
            :to="product.link"
            link
          >
            <Icon :name="product.icon" size="4em" />
            <p class="text-body-2 font-weight-medium">
              {{ product.title }}
            </p>
          </v-list-item>
        </v-list>
      </div>

      <div class="d-flex flex-column align-center mb-10">
        <p class="text-h6 mb-4 text-accent">Streamline HR Operations</p>
        <v-list class="d-flex flex-wrap justify-space-between bg-background">
          <v-list-item
            v-for="(product, index) in hrProducts"
            :key="index"
            class="text-center mb-5"
            :to="product.link"
            link
          >
            <Icon :name="product.icon" size="4em" />
            <p class="text-body-2 font-weight-medium">
              {{ product.title }}
            </p>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </v-container>
</template>

<script setup>
const financeProducts = [
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
];

const supplyChainProducts = [
  {
    title: "Logistics",
    icon: "iconoir:delivery-truck",
    link: "/apps/expenses",
  },
  {
    title: "Inventory ",
    icon: "streamline-emojis:package",
  },
  {
    title: "Production Control",
    icon: "ph:factory",
  },
];

const manufacturingProducts = [
  {
    title: "Website",
    icon: "mdi:web",
  },
  {
    title: "Ecommerce",
    icon: "twemoji:shopping-cart",
  },

];
const salesProducts = [
  {
    title: "POS",
    icon: "mdi-cart-arrow-down",
  },
  {
    title: "CRM",
    icon: "mdi-account-group",
  },
  {
    title: "Sales Forecasting",
    icon: "mdi-chart-areaspline",
  },
];

const hrProducts = [
  {
    title: "Employee Records",
    icon: "mdi-account-circle",
  },
  {
    title: "Recruitment",
    icon: "ic:sharp-person-search",
  },
  {
    title: "Benefits Administration",
    icon: "mdi-heart-outline",
  },
];
</script>
