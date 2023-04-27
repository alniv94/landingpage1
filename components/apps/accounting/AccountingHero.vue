<template>
     <div class="d-flex justify-space-between mt-15 pa-5">
      <div class="d-flex flex-column justify-center align-center px-5">
        <v-img
          src="../images/accounting/hero.png"
          width="550"
          class="rounded-lg"
        ></v-img>
        
      </div>
      <div class="px-4">
        <p class="text-h6 text-accent">Product</p>
        <p class="text-h3 text-accent pb-3">Accounting Management</p>
        <p class="text-subtitle-1">
          Maximize your financial potential with our accounting management
          services and stay ahead of the competition.
        </p>
        <v-list class="bg-grey-lighten-5">
          <v-list-item v-for="list in lists">
            <Icon
              name="material-symbols:check"
              size="1.5em"
              class="text-secondary"
            />
            <p class="text-subtitle-2 d-inline pa-2 text-accent">
              {{ list.content }}
            </p>
          </v-list-item>
        </v-list>
      </div>
    </div>
</template>

<script setup>
const lists = [
  {
    content:
      "Comprehensive financial reporting and analysis to help you make informed business decisions",
  },
  {
    content:
      "Streamlined bookkeeping and accounting processes to save time and reduce errors",
  },
  {
    content:
      "Automated invoicing and payment processing to improve cash flow management",
  },
  {
    content: "Multi-currency support for global business operations",
  },
  {
    content: "Secure and reliable data storage and backup for peace of mind",
  },
];
</script>