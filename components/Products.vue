<template>
  <v-container class="mt-15 ">
    <p class="text-h4 text-accent text-center my-5 pa-5">
      Achieve Your Business Goals with Our Suite of ERP Products
    </p>

    <div class="d-flex flex-wrap justify-space-between">
      <div class="d-flex flex-column align-center mb-10">
        <p class="text-h6 mb-4">Manage Your Finances</p>
        
          <v-list class="d-flex flex-wrap justify-space-between bg-grey-lighten-5">
            <v-list-item
              v-for="(product, index) in financeProducts"
              :key="index"
              class="text-center mb-5"
              :to="product.link"
              link
            >
              <Icon :name="product.icon" size="4em"  />
              <p class="text-body-2 font-weight-medium">
                {{ product.title }}
              </p>
            </v-list-item>
          </v-list>
       
      </div>

      <div class="d-flex flex-column align-center mb-10">
        <p class="text-h6 mb-4">Optimize Your Logistics</p>

        <v-list class="d-flex flex-wrap justify-space-between">
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
        <p class="text-h6 mb-4">Improve Manufacturing Efficiency</p>
        <v-list class="d-flex flex-wrap justify-space-between">
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
        <h3 class="text-h6 mb-4">Boost Sales Productivity</h3>
        <v-list class="d-flex flex-wrap justify-space-between">
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
        <h3 class="text-h5 mb-4">Streamline HR Operations</h3>
        <v-list class="d-flex flex-wrap justify-space-between">
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

<script>
export default {
  name: "ProductsSection",
  data() {
    return {
      financeProducts: [
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
      supplyChainProducts: [
        {
          title: "Purchasing",
          icon: "iconoir:delivery-truck",
          link: "/apps/expenses",
        },
        {
          title: "Inventory ",
          icon: "streamline-emojis:package",
        },
        {
          title: "Logistics",
          icon: "twemoji:shopping-cart",
        },
      ],
      manufacturingProducts: [
        {
          title: "Inventory",
          icon: "icon-park:align-text-both-one",
        },
        {
          title: "Task Management",
          icon: "openmoji:hammer-and-wrench",
        },
        {
          title: "Production Control",
          icon: "ph:factory",
        },
      ],
      salesProducts: [
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
      ],
      hrProducts: [
        {
          title: "Employee Records",
          icon: "mdi-account-circle",
        },
        {
          title: "Payroll Management",
          icon: "mdi-cash-multiple",
        },
        {
          title: "Benefits Administration",
          icon: "mdi-heart-outline",
        },
      ],
    };
  },
};
</script>
