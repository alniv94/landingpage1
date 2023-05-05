<template>
  <v-container class="mt-5">
    <p
      class="text-h4 text-light-blue-accent-2 text-center my-5 pa-5"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="100"
    >
      Tailored <strong>apps</strong> for every need
    </p>

    <div
      class="d-flex flex-wrap flex-lg-row align-lg-center flex-sm-column justify-lg-space-between justify-sm-center align-sm-center"
    >
      <div class="d-flex flex-column align-center mb-10 mx-2">
        <p
          class="text-h6 mb-4 text-light-blue-accent-2"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
        >
          Manage Your Finances
        </p>

        <v-list
          class="d-flex flex-wrap justify-space-between bg-background overflow-hidden"
        >
          <v-list-item
            data-aos="zoom-in-up"
            data-aos-delay="100"
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

      <div class="d-flex flex-column align-center mb-10 mx-2">
        <p
          class="text-h6 mb-4 text-light-blue-accent-2"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
        >
          Logistics and Manafacturing Operation
        </p>

        <v-list
          class="d-flex flex-wrap justify-space-between bg-background overflow-hidden"
        >
          <v-list-item
            data-aos="zoom-in-up"
            data-aos-delay="200"
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

      <div class="d-flex flex-column align-center mb-10 mx-2">
        <p
          class="text-h6 mb-4 text-light-blue-accent-2"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
        >
          Build Website
        </p>
        <v-list
          class="d-flex flex-wrap justify-space-between bg-background overflow-hidden"
        >
          <v-list-item
            data-aos="zoom-in-up"
            data-aos-delay="150"
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

      <div class="d-flex flex-column align-center mb-10 mx-2">
        <p
          class="text-h6 mb-4 text-light-blue-accent-2"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
         
        >
          Boost Sales Productivity
        </p>
        <v-list
          class="d-flex flex-wrap justify-space-between bg-background overflow-hidden"
        >
          <v-list-item
            data-aos="zoom-in-up"
            data-aos-delay="100"
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
        <p
          class="text-h6 mb-4 text-light-blue-accent-2"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
        >
          Streamline HR Operations
        </p>
        <v-list
          class="d-flex flex-wrap justify-space-between bg-background overflow-hidden"
        >
          <v-list-item
            data-aos="zoom-in-up"
            data-aos-delay="100"
            v-for="(product, index) in hrProducts"
            :key="index"
            class="text-center mb-5"
            :to="product.link"
            link
          >
            <Icon :name="product.icon" size="4em" />
            <p class="wrap text-body-2 font-weight-medium"   style="max-width: 6rem;">
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
];

const manufacturingProducts = [
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
];
const salesProducts = [
  {
    title: "POS",
    icon: "mdi-cart-arrow-down",
    link: "/apps/pos",
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
];

const hrProducts = [
  {
    title: "Employee Records",
    icon: "mdi-account-circle",
    link: "/apps/employee",
  },
  {
    title: "Recruitment",
    icon: "ic:sharp-person-search",
    link: "/apps/recruitment",
  },
  {
    title: "Benefits Administration",
    icon: "mdi-heart-outline",
    link: "/apps/administration",
  },
];
</script>

<style scoped>
.wrap{
  word-break: break-word
}
</style>
